export const ROUTES = {
  HOME: '/',
  BLOG: '/blog/:slug',
}

export const CONTRACT_US = {
  LINE: { LABEL: '@273axokg', HREF: 'https://page.line.me/273axokg' },
  EMAIL: { LABEL: 'newmoneycompany888@gmail.com', HREF: 'mailto:newmoneycompany888@gmail.com' },
  TEL: { LABEL: '098-3456489', HREF: 'tel:0983456489' },
  ADDRESS: { LABEL: '16/65 ม.2 บางบอน 3 บางบอน กทม 10150', HREF: '#' },
}

export const environment = {
  email: {
    authUser: process.env.EMAIL_AUTH_USER,
    authPassword: process.env.EMAIL_AUTH_PASSWORD,
    recipients: process.env.EMAIL_RECIPIENTS,
  },
}

export const BLOGS = [
  {
    title: 'เตรียมเอกสารให้พร้อมก่อนขอสินเชื่อ',
    slug: 'เตรียมเอกสารให้พร้อมก่อนขอสินเชื่อ',
    image: '/images/medium-shot-asian-woman-checking-business-documents.webp',
    shortContent: 'เอกสารขอสินเชื่อส่วนบุคคลมีอะไรบ้าง ต้องเตรียมตัวอย่างไร',
    content: `
      <div>
        <p style="margin-bottom: 0.5rem;">เอกสารขอสินเชื่อส่วนบุคคลมีอะไรบ้าง ต้องเตรียมตัวอย่างไร</p>
        <p>เพื่อนๆรู้หรือไม่ว่าปกติแล้วในการขอสินเชื่อแต่ละครั้งเราต้องเตรียมเอกสารแบบไหนอะไรบ้างเพื่อให้ง่ายต่อการประเมินและอนุมัติสินเชื่อได้ไวกว่าปกติ ซึ่งวันนี้ผู้เขียนจะรวบรวมเอกสารที่นิยมใช้ประกอบการขอสินเชื่อซึ่งมีดังต่อไปนี้</p>
      </div>
    `,
  },
  {
    title: 'เทคนิคปลดหนี้ในระยะเวลาอันสั้น',
    slug: 'เทคนิคปลดหนี้ในระยะเวลาอันสั้น',
    image: '/images/inspire-your-teamwork-keep-achieving-group-asian-team-creative-business-people-hand-raise-up-partner.webp',
    shortContent: 'สิ่งสำคัญของการปลดหนี้สินในระยะเวลาอันสั้นคือเราต้องรู้ว่าหนี้ทั้งหมดที่เรากำลังผ่อนชำระนั้นมีอยู่จำนวนเท่าไร',
    content: `
      <div>
        <p style="margin-bottom: 0.5rem;">1.ตรวจสอบหนี้สินทั้งหมดที่เหลืออยู่</p>
        <p>สิ่งสำคัญของการปลดหนี้สินในระยะเวลาอันสั้นคือเราต้องรู้ว่าหนี้ทั้งหมดที่เรากำลังผ่อนชำระนั้นมีอยู่จำนวนเท่าไร และควรจัดลำดับความสำคัญของหนี้ที่ต้องผ่อนชำระ เช่น หนี้บ้าน ซึ่งมักจะผ่อนนานที่สุด หนี้รถยนต์ หรือ หนี้บัตรเครดิตเป็นต้น</p>
      </div>
    `,
  },
  {
    title: 'เทคนิคกู้สินเชื่ออย่างไรให้อนุมัติไว',
    slug: 'เทคนิคกู้สินเชื่ออย่างไรให้อนุมัติไว',
    image: '/images/lifestyle-beautiful-asian-business-young-woman-using-laptop-computer-office-desk.webp',
    shortContent: 'เชื่อว่ามีเพื่อนหลายคนมีกำลังมองหาสินเชื่อเพื่อเสริมสภาพคล่องธุรกิจ',
    content: `
      <div>
        <p>เชื่อว่ามีเพื่อนหลายคนมีกำลังมองหาสินเชื่อเพื่อเสริมสภาพคล่องธุรกิจ แต่ก็มีหลายๆคนที่ประสบปัญหาในการยื่นขอสินเชื่อ วันนี้เรามี 5 เทคนิคดีๆ เพื่อกู้สินเชื่อให้ผ่านง่าย อนุมัติไว ที่คนส่วนใหญ่อาจไม่ทราบมาดังต่อไปนี้</p>
      </div>
    `,
  },
]
