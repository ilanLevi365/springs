import ring_Model from "./ring_Model";

export default (products = []) => {
    const all_Products = products;

    const item_1 = ring_Model(1, { name: 'BARY טבעת אירוסין', carat: '1.7 קראט' }, "השראת הפאר של הטבע, גפן נוצצת של יהלומים סוחפת את האצבע בעיצוב הפתוח יוצא הדופן הזה", { tipe: 'QDE151076-18KY :סגנון', material: 'מתכת: זהב צהוב 18 קראט', Average_Width: 'רוחב ממוצע: 3.1 מ"מ ', weight: 'משקל כולל: 1.7 קראט', color: 'E :בהירות יהלום', clarity: 'VS-1 :נקיות יהלום' }, 'https://bgjewelers.com/wp-content/uploads/2021/08/BG-R1-V2.mp4?_=1', 13500.0001);
    const item_2 = ring_Model(2, { name: 'VERA טבעת אירוסין', carat: '1.2 קראט' }, "הטבעת היפה הזו מעוררת נשיות ורומנטיקה עם יהלומים עגולים ומפוזרים בצורת אגס המנצנצים לאורך כל הלהקה", { tipe: 'BE2DE15103-18KY :סגנון', material: 'מתכת: זהב צהוב 18 קראט', Average_Width: 'רוחב ממוצע: 3.1 מ"מ ', weight: 'משקל כולל: 1.2 קראט', color: 'E :בהירות יהלום', clarity: 'VS-1 :נקיות יהלום' }, 'https://bgjewelers.com/wp-content/uploads/2021/06/BG-R4-V1.mp4?_=1', 11500.0001);
    const item_3 = ring_Model(3, { name: 'EMIL טבעת אירוסין', carat: '1.3 קראט' }, "הטבעת המסנוורת הזו כוללת יהלומים שנוצרו בחיתוך ברקת עם סט חודים, המקיפים את האצבע למראה נצחי ומושך את העין.", { tipe: 'ME2DE15105-18KY :סגנון', material: 'מתכת: זהב לבן 18 קראט', Average_Width: 'רוחב ממוצע: 3.1 מ"מ ', weight: 'משקל כולל: 1.3 קראט', color: 'E :בהירות יהלום', clarity: 'VS-1 :נקיות יהלום' }, ' https://www.joolme.co.il/media/video/126162.mp4 ', 12500.0001);
    const item_4 = ring_Model(4, { name: 'KSGA טבעת אירוסין', carat: '1.2 קראט' }, "עיצוב קלאסי? יש. טאץ' מודרני? יש. אווירת בית המלוכה? יש ויש. יהלומים? בוודאי שיש! לא פחות מ-20 יהלומים מלוטשים ומשובצים בעדינות על גבי טבעת 14K/18K זהב לבן. טבעת אירוסין מושלמת לאחד הרגעים החשובים בחיים", { tipe: 'SE2DE15199-18KY :סגנון', material: 'מתכת: זהב לבן 18 קראט', Average_Width: 'רוחב ממוצע: 3.1 מ"מ ', weight: 'משקל כולל: 1.2 קראט', color: 'E :בהירות יהלום', clarity: 'VS-1 :נקיות יהלום' }, 'https://www.joolme.co.il/media/video/784180.mp4 ', 10500.0001);
    const item_5 = ring_Model(5, { name: 'NOGE טבעת אירוסין', carat: '1 קראט' }, "בהשראת הפאר של הטבע, גפן נוצצת של יהלומים סוחפת את האצבע בעיצוב הפתוח יוצא הדופן הזה.", { tipe: 'GE2DE1532-18KY :סגנון', material: 'מתכת: זהב לבן 18 קראט', Average_Width: 'רוחב ממוצע: 3.1 מ"מ ', weight: 'משקל כולל: 1 קראט', color: 'E :בהירות יהלום', clarity: 'VS-1 :נקיות יהלום' }, 'https://www.joolme.co.il/media/video/137954.mp4', 9500.0001);
    const item_6 = ring_Model(6, { name: 'LYAM טבעת אירוסין', carat: '1.5 קראט' }, "טבעת זו בהשראת הטבע כוללת שתי שורות נוצצות של הדגשי מרקיזה ויהלומים עגולים לסירוגין. פיצול מעוקל עדין ברצועה משפר את התחושה העדינה של הטבעת (משקל כולל של 3/8 קראט).", { tipe: 'UR2DE15151-18KY :סגנון', material: 'מתכת: זהב רוז 18 קראט', Average_Width: 'רוחב ממוצע: 3.1 מ"מ ', weight: 'משקל כולל: 1.5 קראט', color: 'E :בהירות יהלום', clarity: 'VS-1 :נקיות יהלום' }, 'https://media2.bulgari.com/video/upload/f_auto,q_auto/dws/62/e2c0be24560d78c5e599c2a9c9d0bbd2-8931642.mp4', 11000.0001);
    const item_7 = ring_Model(7, { name: 'BARB טבעת אירוסין', carat: '1.1 קראט' }, "טבעת זו בהשראת הטבע כוללת שתי שורות נוצצות של הדגשי מרקיזה ויהלומים עגולים לסירוגין. פיצול מעוקל עדין ברצועה משפר את התחושה העדינה של הטבעת (משקל כולל של 3/8 קראט).", { tipe: 'OU2DE1584-18KY :סגנון', material: 'מתכת: זהב רוז 18 קראט', Average_Width: 'רוחב ממוצע: 3.1 מ"מ ', weight: 'משקל כולל: 1.1 קראט', color: 'E :בהירות יהלום', clarity: 'VS-1 :נקיות יהלום' }, 'https://bgjewelers.com/wp-content/uploads/2016/10/BGR043-1.mp4?_=2', 10000.0001);
    const item_8 = ring_Model(8, { name: 'AIME טבעת אירוסין', carat: '0.9 קראט' }, "רצועת הנצח הזוהרת הזו כוללת יהלומי פאווה צרפתיים, סגנון שיבוץ המאפשר לאור להגיע ליהלומים ממספר זוויות ומשפר את הנצנוץ שלהם.", { tipe: 'FE2DE15103-18KY :סגנון', material: 'מתכת: זהב לבן 18 קראט', Average_Width: 'רוחב ממוצע: 3.1 מ"מ ', weight: 'משקל כולל: 0.9 קראט', color: 'E :בהירות יהלום', clarity: 'VS-1 :נקיות יהלום' }, 'https://www.joolme.co.il/media/video/203717.mp4', 9000.0001);
    const item_9 = ring_Model(9, { name: 'LARO טבעת אירוסין', carat: '1.2 קראט' }, "יהלומי פאווה מנצנצים זורמים באמצע הרצועות הללו, ויוצרים צורת שברון מעוקלת בעדינות. לסט המסוגנן הזה יש מראה של ז'קט טבעתי המתאים בצורה מושלמת לטבעת אירוסין ואת הגמישות והקלות של טבעות מוערמות בנפרד.", { tipe: 'YT2DE151-18KY :סגנון', material: 'מתכת: זהב לבן 18 קראט', Average_Width: 'רוחב ממוצע: 3.1 מ"מ ', weight: 'משקל כולל: 1.2 קראט', color: 'E :בהירות יהלום', clarity: 'VS-1 :נקיות יהלום' }, 'https://www.joolme.co.il/media/video/117679.mp4', 11000.0001);
    const item_10 = ring_Model(10, { name: 'IOUR טבעת אירוסין', carat: '1.6 קראט' }, "טבעת אירוסין בעיצוב ייחודי, מרהיב ושובה נפש. עם 50 יהלומים מלוטשים בשלמות בשיבוץ פאווה על גבי 18K זהב לבן זו טבעת שהיא הצלחה בטוחה", { tipe: 'JY2DE1654-18KY :סגנון', material: 'מתכת: זהב לבן 18 קראט', Average_Width: 'רוחב ממוצע: 3.1 מ"מ ', weight: 'משקל כולל: 1.6 קראט', color: 'E :בהירות יהלום', clarity: 'VS-1 :נקיות יהלום' }, 'https://www.joolme.co.il/media/video/523434.mp4', 13000.0001);

    const Rings_Products = [item_1, item_2, item_3, item_4, item_5, item_6, item_7, item_8, item_9, item_10];

    Rings_Products.map((value) => {
        all_Products.push(value);
    })
    return all_Products;
}