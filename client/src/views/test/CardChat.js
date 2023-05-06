import Avatar from '@components/avatar';
import '@custom-styles/merchandising/merchandising-core.scss';
import { useState } from 'react';
import { MoreVertical } from 'react-feather';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Button, Card, CardHeader, Col, CustomInput, Form, FormGroup, Input, Label } from 'reactstrap';

const data = {
  chat: {
    id: 2,
    userId: 1,
    unseenMsgs: 0,
    chat: [
      {
        message: "How can we help? We're here for you!",
        time: 'Mon Dec 10 2018 07:45:00 GMT+0000 (GMT)',
        senderId: 11
      },
      {
        message: 'Hey John, I am looking for the best admin template. Could you please help me to find it out?',
        time: 'Mon Dec 10 2018 07:45:23 GMT+0000 (GMT)',
        senderId: 1
      },
      {
        message: 'It should be Bootstrap 4 compatible.',
        time: 'Mon Dec 10 2018 07:45:55 GMT+0000 (GMT)',
        senderId: 1
      },
      { message: 'Absolutely!', time: 'Mon Dec 10 2018 07:46:00 GMT+0000 (GMT)', senderId: 11 },
      {
        message: 'Modern admin is the responsive bootstrap 4 admin template.!',
        time: 'Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)',
        senderId: 11
      },
      { message: 'Looks clean and fresh UI.', time: 'Mon Dec 10 2018 07:46:23 GMT+0000 (GMT)', senderId: 1 },
      { message: "It's perfect for my next project.", time: 'Mon Dec 10 2018 07:46:33 GMT+0000 (GMT)', senderId: 1 },
      { message: 'How can I purchase it?', time: 'Mon Dec 10 2018 07:46:43 GMT+0000 (GMT)', senderId: 1 },
      { message: 'Thanks, from ThemeForest.', time: 'Mon Dec 10 2018 07:46:53 GMT+0000 (GMT)', senderId: 11 },
      { message: 'I will purchase it for sure. 👍', time: '2020-12-08T13:52:38.013Z', senderId: 1 }
    ]
  },
  contact: {
    id: 1,
    fullName: 'Felecia Rower',
    avatar: require( '@src/assets/images/portrait/small/avatar-s-20.jpg' ).default,
    status: 'away'
  }
};

const CardChat = () => {
  const [msg, setMsg] = useState( '' );
  const [chatRef, setChatRef] = useState( null );

  console.log( chatRef );
  return (
    <Card className='form-widget'>
      <CardHeader>
        <div className='d-flex align-items-center'>
          <Avatar status='online' className='mr-2' img={data.contact.avatar} imgHeight='34' imgWidth='34' />
          <h5 className='mb-0'>Carrie Hawkins</h5>
        </div>
        <MoreVertical size={18} className='cursor-pointer' />
      </CardHeader>
      <div className='form-app-window'>
        <PerfectScrollbar
          containerRef={el => setChatRef( el )}
          className='form-scroll-section'
          options={{ wheelPropagation: false }}
        >
          <div className='chats'>
            <Form>
              <FormGroup row>
                <Label sm='3' for='name'>
                  First Name
                </Label>
                <Col sm='9'>
                  <Input type='text' name='name' id='name' placeholder='First Name' />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label sm='3' for='Email'>
                  Email
                </Label>
                <Col sm='9'>
                  <Input type='email' name='Email' id='Email' placeholder='Email' />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label sm='3' for='mobile'>
                  Mobile
                </Label>
                <Col sm='9'>
                  <Input type='number' name='mobile' id='mobile' placeholder='Mobile' />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label sm='3' for='password'>
                  Password
                </Label>
                <Col sm='9'>
                  <Input type='password' name='password' id='password' placeholder='Password' />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md={{ size: 9, offset: 3 }}>
                  <CustomInput type='checkbox' id='remember-me' label='Remember Me' defaultChecked={false} />
                </Col>
              </FormGroup>

              <FormGroup className='mb-0' row>
                <Col className='d-flex' md={{ size: 9, offset: 3 }}>
                  <Button.Ripple className='mr-1' color='primary' type='submit' onClick={e => e.preventDefault()}>
                    Submit
                  </Button.Ripple>
                  <Button.Ripple outline color='secondary' type='reset'>
                    Reset
                  </Button.Ripple>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm='3' for='name'>
                  First Name
                </Label>
                <Col sm='9'>
                  <Input type='text' name='name' id='name' placeholder='First Name' />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label sm='3' for='Email'>
                  Email
                </Label>
                <Col sm='9'>
                  <Input type='email' name='Email' id='Email' placeholder='Email' />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label sm='3' for='mobile'>
                  Mobile
                </Label>
                <Col sm='9'>
                  <Input type='number' name='mobile' id='mobile' placeholder='Mobile' />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label sm='3' for='password'>
                  Password
                </Label>
                <Col sm='9'>
                  <Input type='password' name='password' id='password' placeholder='Password' />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md={{ size: 9, offset: 3 }}>
                  <CustomInput type='checkbox' id='remember-me' label='Remember Me' defaultChecked={false} />
                </Col>
              </FormGroup>

              <FormGroup className='mb-0' row>
                <Col className='d-flex' md={{ size: 9, offset: 3 }}>
                  <Button.Ripple className='mr-1' color='primary' type='submit' onClick={e => e.preventDefault()}>
                    Submit
                  </Button.Ripple>
                  <Button.Ripple outline color='secondary' type='reset'>
                    Reset
                  </Button.Ripple>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm='3' for='name'>
                  First Name
                </Label>
                <Col sm='9'>
                  <Input type='text' name='name' id='name' placeholder='First Name' />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label sm='3' for='Email'>
                  Email
                </Label>
                <Col sm='9'>
                  <Input type='email' name='Email' id='Email' placeholder='Email' />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label sm='3' for='mobile'>
                  Mobile
                </Label>
                <Col sm='9'>
                  <Input type='number' name='mobile' id='mobile' placeholder='Mobile' />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label sm='3' for='password'>
                  Password
                </Label>
                <Col sm='9'>
                  <Input type='password' name='password' id='password' placeholder='Password' />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md={{ size: 9, offset: 3 }}>
                  <CustomInput type='checkbox' id='remember-me' label='Remember Me' defaultChecked={false} />
                </Col>
              </FormGroup>

              <FormGroup className='mb-0' row>
                <Col className='d-flex' md={{ size: 9, offset: 3 }}>
                  <Button.Ripple className='mr-1' color='primary' type='submit' onClick={e => e.preventDefault()}>
                    Submit
                  </Button.Ripple>
                  <Button.Ripple outline color='secondary' type='reset'>
                    Reset
                  </Button.Ripple>
                </Col>
              </FormGroup>
            </Form>
          </div>
        </PerfectScrollbar>
        {/* <Form className='chat-app-form' onSubmit={e => handleSendMsg( e )}>
           <InputGroup className='input-group-merge mr-1 form-send-message'>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Label className='attachment-icon mb-0' for='attach-doc'>
                  <Image className='cursor-pointer text-secondary' size={14} />
                  <input type='file' id='attach-doc' hidden />
                </Label>
              </InputGroupText>
            </InputGroupAddon>
            <Input
              value={msg}
              className='border-0'
              onChange={e => setMsg( e.target.value )}
              placeholder='Type your message'
            />
          </InputGroup> 
          <Button className='send' color='primary'>
            <Send size={14} className='d-lg-none' />
            <span className='d-none d-lg-block'>Send</span>
          </Button>
        </Form> */}
      </div>
    </Card>
  );
};

export default CardChat;
