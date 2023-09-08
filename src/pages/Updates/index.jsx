import {useState, useEffect} from "react"

import { useRef } from 'react';

import {api} from '../../services/api'

import {Container} from "./styles.js"

import { Header } from "../../components/Header/index.jsx"
import { ErrorReport } from "../../components/ErrorReport"
import { ProductReport } from "../../components/ProductReport"
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";

import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io"

export function Updates(){
  const [csvFile, setCsvFile] = useState()
  const [reports, setReports] = useState([])
  const [done, setDone] = useState('')
  const [errorOpen, setErrorOpen] = useState(true)
  const [prodOpen, setProdOpen] = useState(true)

  const hiddenFileInput = useRef(null);

  const handleClick = event => {
    hiddenFileInput.current.click();
  };

  function handleOpenCloseErrors () {
    setErrorOpen(!errorOpen)
  }

  function handleOpenCloseProducts () {
    setProdOpen(!prodOpen)
  }

  function uploadCsvFIle(event) {
    const file = event.target.files[0]
    setCsvFile(file)
  }

  async function handleCsvFile() {
    const csvFileUpload = new FormData()
    csvFileUpload.append("files", csvFile)
    const response = await api.post(`/prices/`, csvFileUpload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    setReports(response.data)
  }

  async function handleUpdateProducts() {
    const response = await api.post(`/prices/update`, reports)

    setReports([])
    setCsvFile(null)
    setDone(response.data)
  }

  return(
    <Container>
      <Header />
      <main>
        <div className="reportsSections">
          <Section title={reports.errors && reports.errors.length ? 'Erros identificados' : 'Nenhum erro idenfiticado'} open={errorOpen} onClick={() => handleOpenCloseErrors()} icon={errorOpen ? IoIosArrowDown : IoIosArrowUp}>
            {reports.errors && <ErrorReport errors={reports.errors} />}
          </Section>
          <Section title='Produtos a serem atualizados' open={reports.errors && reports.errors.length ? !prodOpen : prodOpen} onClick={() => handleOpenCloseProducts()} icon={prodOpen ? IoIosArrowDown : IoIosArrowUp}>
            {reports.products && <ProductReport products={reports.products} />}
          </Section>
        </div>
        <div className="button">
          <div className='inputFile'>
            <Button title='Envie seu arquivo .CSV' onClick={handleClick} />
            <input type="file" style={{display:'none'}} ref={hiddenFileInput} onChange={e => uploadCsvFIle(e)} />
          </div>
          {done && <p>{done}</p>}
          <div className="buttonsCheckUpdate">
            <Button title='Verificar arquivo de atualização de preços' loading={!csvFile} onClick={() => handleCsvFile()}/>
            <Button title='Enviar atualização!' loading={!reports.products || reports.errors.length} onClick={() => handleUpdateProducts()} />
          </div>
        </div>
      </main>
    </Container>
  )
}