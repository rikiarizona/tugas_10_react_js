import React, { Component } from 'react';
import { Grid, Flag, Icon, Input, Image, Divider, Header, Label, Container, Button } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div>
        <br/>
        <Grid columns={3} doubling stackable>
          <Grid.Column floated='right' width={2}>
            <Flag name='id' />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Icon size='large' name='angle left' />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Icon size='large' name='angle right' />
            </Grid.Column>
            <Grid.Column width={8}>
            <Input fluid icon='star' placeholder='Search...' />
          </Grid.Column>
          <Grid.Column floated='left' width={2}>
            <Image src='https://react.semantic-ui.com/images/avatar/large/patrick.png' avatar />
            <span>Patrick</span>
          </Grid.Column>
        </Grid>
        <Divider horizontal>
          <Header as='h4'>Selamat Datang!!!</Header>
        </Divider>
        <Grid>
          <Grid.Column floated='right' width={4}>
            <Label as='a' color='teal' tag>Sport</Label>
          </Grid.Column>
        </Grid>
        <br/>
          <Container textAlign='center'>
            <p>Ducati tengah menunggu sidang Pengadilan Banding FIM tentang komponen aerodinamis. Andai gugatan para rivalnya diterima, akankah Ducari akan melanjutkan ke CAS (Pengadilan Arbitrase Olahraga)? Suzuki, Honda, KTM, dan Aprilia memprotes penggunaan komponen aero di motor Desmosedici Andrea Dovizioso dan Danilo Petricci dalam balapan pertama MotoGP 2019 di Qatar karena dianggap ilegal. Pada prosesnya, Dovioso tampil sebagai pemenang usai mengalahkan Marc Marquez. Keempat tim meyakini, komponen itu memiliki fungsi aerodinamis, dan menghasilkan downforce, yang membantu motor melesat di trek. Sementara Ducari bersikukuh komponen itu cuma untuk mendinginkan ban dan sudah disetujui Technical Director sebelum balapan. Pada awalnya, protes keempat tim itu ditolak oleh steward MotoGP sehingga dibawa ke Pengadilan Banding FIM. Sidang itu sendiri akan dilakukan sebelum seri kedua di Argentina digelar pada 29-31 Maret mendatang. Manajer umum Ducati Gigi Dall'Igna berkukuh tidak ada yang ilegal dengan komponen itu. Namun, seandainya pengaduilan mengabulkan gugatan tersebut Ducati akan mempertimbangkan melanjutkan kasus ini ke CAS. "Di dalam federasi, derajatnya berakhir di Pengadilan Banding FIM. Anda harus pergi ke CAS, yang adalah pengadilan olahraga tapi di dalam kasus ini Anda keluar dari perimeter FIM, "Dall'Igna mengungkapkan kepada MotoGP.com. "Saya bahkan tidak ingin memikirkan sampi titik ini. Kami sangat yakin bahwa kami tidak melanggar regulasi kok, dan yakin kami tidak melihat adanya alasan mengapa pengadilan banding bisa memutuskan secara berbeda."</p>
          <Button color='teal' icon labelPosition='left'>
            <Icon name='plus'/>
            Tambah Tautan Ke List
          </Button>
          </Container>
        </div>
    )
  }
}

export default App;