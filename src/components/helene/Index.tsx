import { List, Space, Typography } from "antd"
import { S3Link, formatS3Url } from "../S3"
import './Index.css'
//import PopoutLink from "../PopoutLink"
import { AimOutlined, ApartmentOutlined } from '@ant-design/icons'


const { Title } = Typography

const files = [
  { title: 'Crisis Cleanup Flier - English', path: 'helene/Helene_social_media_8449651386_en-US.png' },
  { title: 'Folleto de Crisis Cleanup - Español', path: 'helene/Helene_social_media_8449651386_es-MX.png' },
  { title: 'Vehicle Placard - REQUIRED IN FLORUDA ONLY', path: 'ian/florida-dashboard-placard.pdf' }
]

export default () => {
  return <Space direction="vertical" size="large">
    <Title level={2}>Hurricane Helene</Title>

    <Title level={3}>Command Centers</Title>
    <div className="row">
      <div className="column">     
      <section className="ccenter">
        <Space direction="vertical">
          <a href="helene/lenoir"><Space><AimOutlined />Lenoir</Space></a>
          <div className="stakesAssigned">Hickory NC</div>
          <a  href="https://sites.google.com/view/ashevillecommandcenter/home"><Space><ApartmentOutlined />Asheville</Space></a>
          <div className="stakesAssigned">Hickory NC</div>
          <a href="helene/greenville"><Space><ApartmentOutlined />Greenville</Space></a>
          <div className="stakesAssigned">Hickory NC</div>
          <a href="helene/aiken"><Space><ApartmentOutlined />Augusta</Space></a>
          <div className="stakesAssigned">Hickory NC</div>
          <a href="helene/douglas"><Space><ApartmentOutlined />Douglas</Space></a>
          <div className="stakesAssigned">Hickory NC</div>
          <a href="helene/waycross"><Space><ApartmentOutlined />Waycross</Space></a>
          <div className="stakesAssigned">Hickory NC</div>
          <a href="helene/valdosta"><Space><ApartmentOutlined />Valdosta</Space></a>
          <div className="stakesAssigned">Hickory NC</div>
          <a href="helene/lakecity"><Space><ApartmentOutlined />Lake City</Space></a>
          <div className="stakesAssigned">Hickory NC</div>
          <a href="helene/madison"><Space><ApartmentOutlined />Madison</Space></a>
          <div className="stakesAssigned">Hickory NC</div>
          <a href="helene/chiefland"><Space><ApartmentOutlined />Chiefland</Space></a>
          <div className="stakesAssigned">Hickory NC</div>
          <a href="helene/stpetersburg"><Space><ApartmentOutlined />St. Petersburg</Space></a>
          <div className="stakesAssigned">Hickory NC</div>
          <a href="helene/stpetersburg"><Space><AimOutlined />Venice</Space></a> 
          <div className="stakesAssigned">Hickory NC</div>
          <a href="helene/stpetersburg"><Space><AimOutlined />Ft. Myers</Space></a> 
          <div className="stakesAssigned">Hickory NC</div>
          <a href="helene/stpetersburg"><Space><AimOutlined />Naples</Space></a>
          <div className="stakesAssigned">Hickory NC</div>  
        </Space>
      </section> 
     </div>
     <div className="column">
      <section>
          <Space direction="vertical">
            <img
              src={formatS3Url('helene/Helene-Week2.png')}
              alt="Command Centers Map" 
              style={{ maxWidth: 400 }}
             />
            <cite>Screenshot</cite>
          </Space>
        </section>
      </div>
    </div>



    <section>
      <Title level={3}>Files</Title>
      <List
        dataSource={files}
        renderItem={item => <List.Item><S3Link path={item.path}>{item.title}</S3Link></List.Item>}
        rowKey={item => item.path} />
    </section>
  </Space>
}