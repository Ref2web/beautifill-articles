export const site = {
  name: 'Beautifill by Jup',
  title: 'Beautifill by Jup | บทความความงามที่ช่วยให้เลือกได้มั่นใจ',
  description:
    'บทความจาก Beautifill by Jup สำหรับคนที่อยากเข้าใจก่อนทำเล็บ สักคิ้ว หรือสักปาก จากข้อมูลจริงและเหตุผลที่ใช้ตัดสินใจ',
  url: 'https://articles.beautifill.site',
  nav: [
    { href: '/', label: 'บทความ' },
    { href: '/nails/', label: 'ทำเล็บ' },
    { href: '/eyebrow-tattoo/', label: 'สักคิ้ว' },
    { href: '/lip-tattoo/', label: 'สักปาก' },
    { href: '/about-jup', label: 'เกี่ยวกับเรา' }
  ]
};

export const serviceLabels: Record<
  string,
  {
    title: string;
    category: 'nails' | 'eyebrow-tattoo' | 'lip-tattoo';
    description: string;
    image: string;
    color: string;
    emptyTitle: string;
    emptyDescription: string;
  }
> = {
  nails: {
    title: 'ทำเล็บ',
    category: 'nails',
    description: 'รวมบทความเรื่องการเลือกสี ทรง ความยาว ราคา การดูแล และความเสี่ยงก่อนทำเล็บ',
    image: '/images/category-nails.png',
    color: '#D9C06F',
    emptyTitle: 'ยังไม่มีบทความทำเล็บ',
    emptyDescription: 'หมวดนี้ถูกเตรียมไว้สำหรับบทความทำเล็บ'
  },
  'eyebrow-tattoo': {
    title: 'สักคิ้ว',
    category: 'eyebrow-tattoo',
    description: 'รวมบทความเรื่องทรงคิ้ว ความเข้ากับหน้า ผลลัพธ์ธรรมชาติ ขั้นตอน ราคา และการดูแลก่อนตัดสินใจ',
    image: '/images/category-brows.png',
    color: '#6F7DD9',
    emptyTitle: 'ยังไม่มีบทความสักคิ้ว',
    emptyDescription: 'หมวดนี้ถูกเตรียมไว้แล้ว แต่ยังไม่มีบทความสักคิ้วที่เผยแพร่ในไฟล์ Markdown ตอนนี้'
  },
  'lip-tattoo': {
    title: 'สักปาก',
    category: 'lip-tattoo',
    description: 'รวมบทความเรื่องสีปากเดิม การเลือกสี ความคาดหวัง ขั้นตอน การดูแลหลังทำ และคำถามก่อนจอง',
    image: '/images/category-lips.png',
    color: '#6FD988',
    emptyTitle: 'ยังไม่มีบทความสักปาก',
    emptyDescription: 'หมวดนี้ถูกเตรียมไว้แล้ว แต่ยังไม่มีบทความสักปากที่เผยแพร่ในไฟล์ Markdown ตอนนี้'
  }
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
