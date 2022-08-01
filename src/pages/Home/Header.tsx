import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Container, Header, Icon, Segment } from 'semantic-ui-react'

const DIRECTORY_PAGE = '/application'

function PageHeader(): JSX.Element {
  const navigate = useNavigate()

  return (
    <Segment
      inverted
      textAlign="center"
      style={{ minHeight: 700, padding: '1em 0em' }}
      vertical
    >
      <Container text>
        <Header
          as="h1"
          content="Document Processor"
          inverted
          style={{
            fontSize: '4em',
            fontWeight: 'normal',
            marginBottom: 0,
            marginTop: '3em',
          }}
        />
        <Header
          as="h2"
          content="Managing bulk documents and records should not be painful."
          inverted
          style={{
            fontSize: '1.7em',
            fontWeight: 'normal',
            marginTop: '1.5em',
          }}
        />
        <Button
          primary
          size="huge"
          animated
          onClick={() => navigate(`${DIRECTORY_PAGE}`)}
        >
          <Button.Content visible>Get Started</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow right" />
          </Button.Content>
        </Button>
      </Container>
    </Segment>
  )
}

export default PageHeader
