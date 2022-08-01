import React from 'react'
import { Outlet } from 'react-router-dom'
import {
  Checkbox,
  Grid,
  Icon,
  Menu,
  Segment,
  Sidebar as SemanticUiSidebar,
} from 'semantic-ui-react'

function Sidebar() {
  const [visible, setVisible] = React.useState(true)

  return (
    <Grid columns={1}>
      <Grid.Column>
        <Checkbox
          checked={visible}
          label={{ children: <code>visible</code> }}
          onChange={() => setVisible(!visible)}
        />
      </Grid.Column>

      <Grid.Column>
        <SemanticUiSidebar.Pushable as={Segment}>
          <SemanticUiSidebar
            as={Menu}
            animation="overlay"
            icon="labeled"
            inverted
            onHide={() => setVisible(false)}
            vertical
            visible={visible}
            width="thin"
          >
            <Menu.Item as="a">
              <Icon name="home" />
              Home
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="gamepad" />
              Games
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="camera" />
              Channels
            </Menu.Item>
          </SemanticUiSidebar>

          <SemanticUiSidebar.Pusher dimmed={visible}>
            <Segment basic>
              <Outlet />
            </Segment>
          </SemanticUiSidebar.Pusher>
        </SemanticUiSidebar.Pushable>
      </Grid.Column>
    </Grid>
  )
}

export default Sidebar
