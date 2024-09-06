import Component, { PageEl } from '@/components/Libs/Component';
import Copy from '@/components/Libs/Copy';
import Router from 'next/router'
import Window from '@/components/Libs/Window';
import TextBox from '@/components/Libs/TextBox';
import Icon2Titles from '@/components/Libs/Icon2Titles';
import Icon3Titles from '@/components/Libs/Icon3Titles';
import { SP } from 'next/dist/shared/lib/utils';
import { url } from 'inspector';


export default p => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {

  let styles = global.styles
  let name = "سرویس آب و هوا"

  console.log(props.data)

  return (
    <div style={{ direction: "ltr", minHeight: "11vh", }}>
      <br-x />
      <Window title={name} style={{
        minHeight: 400, margin: 10, width: "calc(100% - 20px)",
        backgroundImage: "url('https://cdn.ituring.ir/research/12/sky-wallpaper-for-video-conferencing_-crc8de88257-_size1.48mb.webp')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        objectFit: "contain",
      }}>

        <c-x>

          <br-x />

          <f-cc>
            <f-x style={{
              fontSize: 30,
              fontFamily: "cursive",
              backgroundColor: "lightblue",
              borderRadius: "10px",
              paddingRight: 5,
              paddingLeft: 5
            }}>weather</f-x>
          </f-cc>

          <br-x />
          <br-x />

          <f-cc>

            <f-cse style={{
              width: "200px",
              height: "200px",
              backgroundColor: "skyblue",
              borderRadius: "20px",
              fontSize: "20px",
              boxShadow: "0 0 15px rgb(46 50 54)",
              opacity: "0.8"
            }}>

              <f-cc>
                <img style={{ width: 100, height: 100 }} src='https://cdn.ituring.ir/research/12/thermometer.png' />

                <sp-1 />

                <f-cc style={{ fontSize: 30 }}>{(props.data.FeelsLikeC)}°c</f-cc>
              </f-cc>

            </f-cse>

            <sp-1 />
            <sp-1 />


            <f-cse style={{
              width: "200px",
              height: "200px",
              backgroundColor: "skyblue",
              borderRadius: "20px",
              fontSize: "20px",
              boxShadow: "0 0 15px rgb(46 50 54)",
              opacity: "0.8"
            }}>

              <f-cc>
                <img style={{ width: 100, height: 100 }} src='https://cdn.ituring.ir/research/12/drop.png' />

                <sp-1 />

                <f-cc style={{ fontSize: 30 }}>{(props.data.humidity)} %</f-cc>
              </f-cc>

            </f-cse>

          </f-cc>

          <br-x />
          <br-x />
          <br-x />

          <f-cc style={{ fontSize: 20 }}>
            tuning team
          </f-cc>
        </c-x>

      </Window>
    </div>
  )
}


export async function getServerSideProps(context) {


  var session = await global.SSRVerify(context)
  var { uid, name, image, imageprop, lang, cchar,
    unit, workspace, servid, servsecret,
    usedquota, quota, quotaunit, status, regdate, expid,
    role, path, devmod, userip, } = session;

  let json = await (await fetch("https://cdn.ituring.ir/research/api/weather/")).json()
  let data = json.current_condition[0]


  return {
    props: {
      data: global.QSON.stringify({
        data,
        session,
        // nlangs,
      })
    },
  }
}