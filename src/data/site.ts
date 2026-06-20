export const site = {
  name: 'Beautifill by Jup',
  title: 'Beautifill by Jup | บทความเล็บที่ช่วยให้เลือกได้มั่นใจ',
  description:
    'บทความเรื่องเล็บจาก Beautifill by Jup สำหรับคนที่อยากเลือกเล็บให้เหมาะกับชีวิตจริง งาน งบประมาณ และความเสี่ยงก่อนทำ',
  url: 'https://www.beautifillbyjup.com',
  nav: [
    { href: '/', label: 'บทความ' },
    { href: '/topics/gel-nails', label: 'เล็บเจล' },
    { href: '/topics/nail-damage', label: 'เล็บพัง' },
    { href: '/about-jup', label: 'เกี่ยวกับ Jup' }
  ]
};

export const topicLabels: Record<string, { title: string; description: string; image: string }> = {
  'gel-nails': {
    title: 'เล็บเจล',
    description: 'เลือกสี ทรง ความยาว และการดูแลเล็บเจลให้เหมาะกับชีวิตจริง',
    image: '/images/thumbnail-nail-palette.png'
  },
  'nail-care': {
    title: 'ดูแลเล็บ',
    description: 'หลักคิดก่อนและหลังทำเล็บ เพื่อให้เล็บสวยโดยไม่ละเลยความสบาย',
    image: '/images/thumbnail-nail-service.png'
  },
  'nail-damage': {
    title: 'เล็บพัง เล็บบาง',
    description: 'สาเหตุที่ควรเช็ก วิธีคุยกับร้าน และสิ่งที่ไม่ควรฟันธงเกินหลักฐาน',
    image: '/images/thumbnail-nail-service.png'
  },
  'price-and-value': {
    title: 'ราคาและความคุ้มค่า',
    description: 'เข้าใจว่าราคาทำเล็บควรดูจากอะไร ไม่ใช่ดูถูกหรือแพงอย่างเดียว',
    image: '/images/thumbnail-nail-tools.png'
  },
  'salon-checklist': {
    title: 'เลือกร้านทำเล็บ',
    description: 'เช็กมาตรฐาน กระบวนการ และคำถามที่ควรถามก่อนตัดสินใจ',
    image: '/images/thumbnail-nail-tools.png'
  }
};
