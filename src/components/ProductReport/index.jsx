import {Container, Tr} from "./styles.js"

export function ProductReport({products}){
  return (
    <Container>
      <table>
        <thead>
          <Tr>
              <th>Código</th>
              <th>Nome do produto</th>
              <th>Preço Atual</th>
              <th>Novo Preço</th>
          </Tr>
        </thead>
        <tbody>
          {products && products.map(product => (
              <Tr key={String(product.code)}>
                  <td>{product.code}</td>
                  <td>{product.name}</td>
                  <td>{product.sales_price}</td>
                  <td>{product.new_price}</td>
              </Tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}