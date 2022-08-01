import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

function ApplicationHeader() {
  return (
    <Header as="h2" style={{ padding: '1.5rem' }}>
      <Icon name="file alternate" />
      <Header.Content>
        Document Processor
        <Header.Subheader>Manage your files</Header.Subheader>
      </Header.Content>
    </Header>
  )
}

export default ApplicationHeader
