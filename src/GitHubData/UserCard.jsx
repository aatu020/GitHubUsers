import { useEffect, useState } from "react"
import {  Container, Col, Row ,Card, CardBody, CardImg, CardText, CardTitle, Button } from "reactstrap"

const UserCard = (props) => {
    const [allpost, setPost] = useState([])
    const getUser = async () => {
        const response = await fetch('https://api.github.com/users')
        setPost(await response.json())
    }
    useEffect(() => {
        getUser()
    }, [])

    return (
        <>
            <Container>
                <Row>
                    {
                    allpost.filter((value)=> {
                        if(props.typedData === ""){
                            return value
                        }
                        else if(value.login.toLowerCase().includes(props.typedData.toLowerCase())){
                            return value
                        }
                    }).map((post , key) => {
                            {/* console.log(post) */}
                            return (
                                <>                                   
                                    <Col sm="3" className = "col" style={{padding : '5px'}} key={key}>
                                        <Card >
                                            <CardImg width="50%" src={post.avatar_url} alt="Card image cap" />
                                            <CardBody>
                                                <CardTitle tag="h4">{post.id} </CardTitle>
                                                <CardText tag="h5">{post.login}</CardText>
                                                <Button href={post.url}>Check out</Button>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </>
                            )
                        })
                    }
                </Row>
            </Container>
        </>
    )
}
export default UserCard