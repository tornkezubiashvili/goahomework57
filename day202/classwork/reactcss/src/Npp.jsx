

function Npp() {
    let productArr = [
        {
            id: 1,
            title: "თონის პური",
            desc: "თონის პური შეიცავს ფასანაურულ მინერალებს",
            price: "1.50₾",
            imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgsxE3z6gQ1APaWbaGUSlMwJChhIIZAFiZ9DrDDLZNMQ&s=10"
        }
    ]

    productArr.push(
        {
            id: 51,
            title: "რძე — 1 ლიტრი",
            desc: "გამოიყენება ყავაში, ფაფაში, ცომეულსა და სხვა კერძებში.",
            price: "2.85₾",
            imgSrc: "https://images.openai.com/static-rsc-4/q7Bp4px3eQOSmEIjcJ7OAKP9sQxOmWRloORnr5HSXuoFag-8xqDHH7zZJHSpBfN1yT_GoNokfdPO1DRhzZSQ7ELSPnNXgsMojgUmI5BuLjqswVyIkeWouxyxY4H3QbfWClmlA3WqfURkdFV_vvq3euwe8iWd9iiw5-_mQ_Aqu5CWjEFU3VJnmSepH1D4dXjr?purpose=fullsize"
        },
        {
            id: 52,
            title: "კვერცხი — 10 ცალი",
            desc: "ცილის წყარო; გამოდგება საუზმისთვის, ომლეტისა და ცხობისთვის.",
            price: "3₾",
            imgSrc: "https://images.openai.com/static-rsc-4/q7Bp4px3eQOSmEIjcJ7OAKP9sQxOmWRloORnr5HSXuoFag-8xqDHH7zZJHSpBfN1yT_GoNokfdPO1DRhzZSQ7ELSPnNXgsMojgUmI5BuLjqswVyIkeWouxyxY4H3QbfWClmlA3WqfURkdFV_vvq3euwe8iWd9iiw5-_mQ_Aqu5CWjEFU3VJnmSepH1D4dXjr?purpose=fullsize"
        },
        {
            id: 53,
            title: "ბრინჯი — 1 კგ",
            desc: "ცილის წყარო; გამოდგება საუზმისთვის, ომლეტისა და ცხობისთვის.",
            price: "3 ₾",
            imgSrc: "https://images.openai.com/static-rsc-4/ouvt4u0_0Np8ansSxNIRfmkkCGaH-AOY5RCkfEjK0ZV7bsBLIHZlTNSEyfaLjxHlYchyECPmM7SPl84YqOhqfVFyjUP8PkgvDKPw5KES1_YcQWyeKUGC50tLMkm-FcygOoVz6HuB198YyQgbAz6YlcabLbAeP54nj3txfR2VI-6dVQ1KEqHG5WgtzCoWOeud?purpose=fullsize"
        },
        {
            id: 54,
            title: "მზესუმზირის ზეთი — 1 ლ",
            desc: "გამოიყენება შეწვისა და სხვადასხვა კერძის მოსამზადებლად.",
            price: "6.50₾",
            imgSrc: "https://images.openai.com/static-rsc-4/4pRdKAvRno4D7A6b0sRfJMxL0pzVLcx_azaVN5eZ1fG_AeDCpIIpBdX41aFBuNOZRPy3b4k0ZlWiTGfhc0EaBdNlYTNcnVWM3ozrOvESNR_jO5EalLU2Zg_qskyAhRimLc17GYbeJ1y4BcVeoOEvPdYHTisEVzGER62VYxlDO8cy5E20TJAU9aeuJed12FO3?purpose=fullsize"
        },
        {
            id: 55,
            title: "მაკარონი — 400 გ",
            desc: "სწრაფად მოსამზადებელი საკვები, რომელიც უხდება ყველს, სოუსს ან ხორცს.",
            price: "1.75₾",
            imgSrc: "https://images.openai.com/static-rsc-4/Gh2RKeaGIkDQjIJzqqYn8GJrkzzHt3szodsvr4qd_fmTYHwc0oN8HvIi8ImwWnpG8gy4lyM1tvPsPSKcCVhZtfmfzPzE2_foUlUX8FGWDKWBwtzF6IsGI_Yw0npmLucVyUL8P0uPOdwBNHdoqIPFQWl8tQlE_xaglDF6W0rNy-cxx5xySBKHM37DduluYGtC?purpose=fullsize"
        },
        {
            id: 56,
            title: "ქათმის ფილე — 1 კგ",
            desc: "ცილებით მდიდარი ხორცი, შესაფერისია შეწვისთვის, მოხარშვისა და ღუმელში მომზადებისთვის.",
            price: "17₾",
            imgSrc: "https://images.openai.com/static-rsc-4/qdX0Ces0eJbNiqcKvRDtIswbjyYtkklvriCcEoe9ucNsyXq8wt4S3DnybakwrfCRhdpP4BtON9zJQnxvl3UFutqr7ZKXIFhS62r7PW4LRviYbYrsQiOnCO6wmN_5kFgDrjMZuOZRPUzH5sFc8C232TXddaWh0TE9F77SQmNtJzPx4JEr_UrXDxPL-7OrIKJ4?purpose=fullsize"
        },
        {
            id: 57,
            title: "კარტოფილი — 1 კგ",
            desc: "ბიუჯეტური პროდუქტი გარნირისთვის, პიურესა და შემწვარი კერძებისთვის.",
            price: "2.50₾",
            imgSrc: "https://images.openai.com/static-rsc-4/agPUw6VRBhNEJo_zGNwdgcZ0wULyaPucfZqPszyvM--MVFwkp9gSp9M6p8YWpKNka-xyIGaiivD3cZFl-ZrduKq5N9JZg0-AFesUf1X6BI388kpx-lfJlReN7LadYcZTLFReIlAGDR1cY6Qwu11K_ye9kU6xOqIa_X4NTGjwzn0?purpose=inline"
        },
        {
            id: 58,
            title: "შაქარი — 1 კგ",
            desc: "გამოიყენება ჩაისთვის, ყავისთვის, დესერტებისა და ცომეულისთვის.",
            price: "2.50 ₾",
            imgSrc: "https://images.openai.com/static-rsc-4/6rxJwa3RIjV9FiqCLWT6H7LL_u0A2ZPSDHif7bOEJzTb5sfwVARpdHEOzvVl9Ac5vTfndzTF3ZOa8CGujyU5Il8RsHLRZsn7OG3E_QwuoNsRE9subiycOf4Lu-PlvJ7LCbTga_vaW0EOSYHSL45lEtYIP2l0S8CIcNjzsGhcfNnYNT9zCGcg1zCS6emRTAIZ?purpose=fullsize"
        },
        {
            id: 59,
            title: "პომიდორი და კიტრი — 1 კგ",
            desc: "გამოიყენება ჩაისთვის, ყავისთვის, დესერტებისა და ცომეულისთვის.",
            price: "6 ₾",
            imgSrc: "https://images.openai.com/static-rsc-4/n2CBmXDZ6s3VQRWWzHTG48rb2uoPzSqhKp4K9CirdCQKdwN_atRhnVEfkxZtOssthc4T48iFVatiOp1oZAXnE_kRu451PWkx2LkJnQ3QN5gS3YXBvsTgTOWkM2XQrNjvDnG0wqTRM_XF8PIFY9cMR_dynEFOQMp5-EsByAaFfC0uvMUwGWYqwYMD46555FIg?purpose=fullsize"
        },
        {
            id: 60,
            title: "კარტოფილი — 1 კგ",
            desc: "გამოიყენება შესაწვავად, მოსახარშად და პიურეს მოსამზადებლად.",
            price: "2 ₾",
            imgSrc: "https://images.unsplash.com/photo-1518977676601-b53f82aba655"
        },
        {
            id: 61,
            title: "ხახვი — 1 კგ",
            desc: "გამოიყენება სუპებში, სალათებსა და სხვადასხვა კერძში.",
            price: "2.50 ₾",
            imgSrc: "https://images.unsplash.com/photo-1508747703725-719777637510"
        },
        {
            id: 62,
            title: "ვაშლი — 1 კგ",
            desc: "სასარგებლო ხილი, რომელიც კარგია ყოველდღიური წასახემსებლად.",
            price: "4 ₾",
            imgSrc: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6"
        },
        {
            id: 63,
            title: "ბანანი — 1 კგ",
            desc: "ტკბილი ხილი, რომელიც გამოდგება საუზმისთვის და წასახემსებლად.",
            price: "5 ₾",
            imgSrc: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e"
        },
        {
            id: 64,
            title: "ფორთოხალი — 1 კგ",
            desc: "ციტრუსი, რომელიც შეიცავს C ვიტამინს და სასიამოვნო გემო აქვს.",
            price: "4.50 ₾",
            imgSrc: "https://images.unsplash.com/photo-1547514701-42782101795e"
        },
        {
            id: 65,
            title: "სტაფილო — 1 კგ",
            desc: "გამოიყენება სუპებში, სალათებსა და სხვა კერძებში.",
            price: "2.50 ₾",
            imgSrc: "https://images.unsplash.com/photo-1445282768818-728615cc910a"
        },
        {
            id: 66,
            title: "კვერცხი — 10 ცალი",
            desc: "ცილებით მდიდარი პროდუქტი საუზმისა და სხვადასხვა კერძისთვის.",
            price: "4 ₾",
            imgSrc: "https://images.unsplash.com/photo-1506976785307-8732e854ad03"
        },
        {
            id: 67,
            title: "რძე — 1 ლიტრი",
            desc: "გამოიყენება ყავაში, ფაფაში, ცომეულსა და სასმელებში.",
            price: "3.50 ₾",
            imgSrc: "https://images.unsplash.com/photo-1563636619-e9143da7973b"
        },
        {
            id: 68,
            title: "ბრინჯი — 1 კგ",
            desc: "შესაფერისია გარნირისთვის, ფლავისა და სხვა კერძებისთვის.",
            price: "4 ₾",
            imgSrc: "https://images.unsplash.com/photo-1586201375761-83865001e31c"
        },
        {
            id: 69,
            title: "მაკარონი — 400 გ",
            desc: "მარტივად მოსამზადებელი პროდუქტი, რომელიც უხდება ყველსა და სოუსს.",
            price: "2 ₾",
            imgSrc: "https://images.unsplash.com/photo-1551462147-ff29053bfc14"
        },
        {
            id: 70,
            title: "ყველი — 1 კგ",
            desc: "რძის პროდუქტი, რომელიც უხდება პურს, ხაჭაპურსა და სხვადასხვა კერძს.",
            price: "18 ₾",
            imgSrc: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d"
        },
        {
            id: 71,
            title: "კარაქი — 200 გ",
            desc: "გამოიყენება პურზე წასასმელად, ცომეულსა და კერძების მოსამზადებლად.",
            price: "6 ₾",
            imgSrc: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d"
        },
        {
            id: 72,
            title: "იოგურტი — 400 გ",
            desc: "მსუბუქი რძის პროდუქტი საუზმისთვის ან წასახემსებლად.",
            price: "3 ₾",
            imgSrc: "https://images.unsplash.com/photo-1488477181946-6428a0291777"
        },
        {
            id: 73,
            title: "არაჟანი — 400 გ",
            desc: "უხდება სალათებს, სუპებსა და სხვადასხვა ქართულ კერძს.",
            price: "4 ₾",
            imgSrc: "https://images.unsplash.com/photo-1550583724-b2692b85b150"
        },
        {
            id: 74,
            title: "ლობიო — 1 კგ",
            desc: "მცენარეული ცილის წყარო, რომელიც გამოიყენება ლობიოსა და სხვა კერძებში.",
            price: "6 ₾",
            imgSrc: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4"
        },
        {
            id: 75,
            title: "ოსპი — 500 გ",
            desc: "მდიდარია ცილებითა და ბოჭკოებით; კარგია სუპებისა და გარნირისთვის.",
            price: "4 ₾",
            imgSrc: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4"
        },
        {
            id: 76,
            title: "თაფლი — 500 გ",
            desc: "ბუნებრივი ტკბილი პროდუქტი, რომელიც უხდება ჩაისა და საუზმეს.",
            price: "12 ₾",
            imgSrc: "https://images.unsplash.com/photo-1587049352851-8d4e89133924"
        },
        {
            id: 78,
            title: "შვრიის ფანტელები — 500 გ",
            desc: "გამოიყენება ფაფის მოსამზადებლად და მოსახერხებელია საუზმისთვის.",
            price: "4 ₾",
            imgSrc: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf"
        },
        {
            id: 79,
            title: "კეტჩუპი — 500 გ",
            desc: "პომიდვრის სოუსი, რომელიც უხდება კარტოფილს, სენდვიჩებსა და სხვა კერძებს.",
            price: "4 ₾",
            imgSrc: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc"
        },
        {
            id: 80,
            title: "შოკოლადი — 100 გ",
            desc: "ტკბილეული, რომელიც გამოდგება დესერტად ან მცირე წასახემსებლად.",
            price: "3.50 ₾",
            imgSrc: "https://images.unsplash.com/photo-1548907040-4d42c8b4e7a5"
        }
    )
    return (
        <>
            <img src={productArr[28].imgSrc} alt=""  />
        </>
    )
}

export default Npp

