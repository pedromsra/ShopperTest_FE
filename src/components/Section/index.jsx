import { Container } from "./styles";

export function Section({ title, icon: Icon, open=false, children, ...rest }){
    return (
        <Container disabled={open} {...rest}>
            <div className="header">
              <h2>{title}</h2>
              {Icon && <Icon className="icon" size={32} />}
            </div>
            {open ? children : null}
        </Container>
    )
}