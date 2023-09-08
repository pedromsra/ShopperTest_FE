import {Container, Tr} from "./styles.js"

export function ErrorReport({errors}){

  const errorsExist = Number(errors.length)

  return (
    <Container>
      {errorsExist ? <table>
        <thead>
          <Tr>
              <th>Descrição do erro</th>
              <th>Código</th>
              <th>Nome do produto</th>
          </Tr>
        </thead>
        <tbody>
          {errors && errors.map(error => (
              <Tr key={String(error.code)}>
                  <td>{error.error}</td>
                  <td>{error.code}</td>
                  <td>{error.name}</td>
              </Tr>
          ))}
        </tbody>
      </table> : null}
    </Container>
  )
}