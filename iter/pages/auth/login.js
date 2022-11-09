import Head from 'next/head'
import Image from 'next/image'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';



export default function loginPage() {
  return (
    <div>
      <h2>Hello, login</h2>
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </div>
  )
}

// ----------------------------------------------------------------------

loginPage.getLayout = function getLayout(page) {
    return (
      <Layout simpleHeader disabledFooter>
        {page}
      </Layout>
    );
  };