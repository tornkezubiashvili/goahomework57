import React from 'react'
import { useEffect, useState } from 'react';


function Prouct({ setArry }) {
    useEffect(() => {
        setArry(productArr);
    }, [])
    let productArr = [
        {
            id: 0,
            title: "თონის პური",
            desc: "შეიცავს ფასანაურულ მინერალებს",
            price: "1.50",
            imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgsxE3z6gQ1APaWbaGUSlMwJChhIIZAFiZ9DrDDLZNMQ&s=10"
        },
        {
            id: 1,
            title: "საქონლის ხორცი — 1 კგ",
            desc: "გამოიყენება ჩაშუშული კერძების, სუპებისა და მწვადის მოსამზადებლად.",
            price: "25",
            imgSrc: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f"
        },
        {
            id: 2,
            title: "ღორის ხორცი — 1 კგ",
            desc: "შესაფერისია მწვადისთვის, კატლეტებისა და სხვა კერძებისთვის.",
            price: "18",
            imgSrc: "https://images.unsplash.com/photo-1602470520998-f4a52199a3d6"
        },
        {
            id: 3,
            title: "ქათმის ბარკალი — 1 კგ",
            desc: "გამოიყენება ღუმელში გამოსაცხობად ან შესაწვავად.",
            price: "9",
            imgSrc: "https://images.unsplash.com/photo-1532550907401-a500c9a57435"
        },
        {
            id: 4,
            title: "ძეხვი — 500 გ",
            desc: "ხორცპროდუქტი სენდვიჩებისა და სწრაფი საუზმისთვის.",
            price: "8",
            imgSrc: "https://images.unsplash.com/photo-1544025162-d76694265947"
        },
        {
            id: 5,
            title: "ლორი — 300 გ",
            desc: "გამოიყენება სენდვიჩებში, პიცასა და საუზმეზე.",
            price: "7",
            imgSrc: "https://images.unsplash.com/photo-1524438418049-ab2acb7aa48f"
        },
        {
            id: 6,
            title: "სოსისი — 500 გ",
            desc: "სწრაფად მოსამზადებელი ხორცპროდუქტი საუზმისთვის.",
            price: "6",
            imgSrc: "https://images.unsplash.com/photo-1612392062126-2f1b2f6c3d35"
        },
        {
            id: 7,
            title: "თევზი — 1 კგ",
            desc: "ცილის წყარო, რომელიც შეიძლება გამოაცხო ან შეწვა.",
            price: "18",
            imgSrc: "https://images.unsplash.com/photo-1510130387422-82bed34b37e9"
        },
        {
            id: 8,
            title: "თინუსის კონსერვი — 185 გ",
            desc: "მოსახერხებელია სალათებისა და სენდვიჩების მოსამზადებლად.",
            price: "5",
            imgSrc: "https://images.unsplash.com/photo-1534483509719-3feaee7c30da"
        },
        {
            id: 9,
            title: "სარდინის კონსერვი — 120 გ",
            desc: "თევზის კონსერვი პურისა და მსუბუქი კერძებისთვის.",
            price: "3.50",
            imgSrc: "https://images.unsplash.com/photo-1510130387422-82bed34b37e9"
        },
        {
            id: 10,
            title: "მაიონეზი — 400 გ",
            desc: "გამოიყენება სალათებში, სენდვიჩებსა და სოუსებში.",
            price: "4",
            imgSrc: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc"
        },
        {
            id: 11,
            title: "მდოგვი — 200 გ",
            desc: "არომატული სოუსი სენდვიჩებისა და ხორცის კერძებისთვის.",
            price: "3",
            imgSrc: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc"
        },
        {
            id: 12,
            title: "სოიოს სოუსი — 150 მლ",
            desc: "გამოიყენება ბრინჯის, ბოსტნეულისა და ხორცის კერძებში.",
            price: "4.50",
            imgSrc: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc"
        },
        {
            id: 13,
            title: "ტომატის პასტა — 200 გ",
            desc: "საჭმელს მატებს პომიდვრის გემოსა და ფერს.",
            price: "2.50",
            imgSrc: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc"
        },
        {
            id: 14,
            title: "მწნილი კიტრი — 680 გ",
            desc: "მარინადში შენახული კიტრი გარნირისა და წასახემსებლად.",
            price: "5",
            imgSrc: "https://images.unsplash.com/photo-1462536738427-0725f3eb7a97"
        },
        {
            id: 15,
            title: "მწვანე ბარდა — 400 გ",
            desc: "გამოიყენება სალათებში, სუპებსა და გარნირებში.",
            price: "3",
            imgSrc: "https://images.unsplash.com/photo-1587735243615-c03f25aaff15"
        },
        {
            id: 16,
            title: "სიმინდის კონსერვი — 340 გ",
            desc: "ტკბილი სიმინდი სალათებისა და სხვადასხვა კერძისთვის.",
            price: "3.50",
            imgSrc: "https://images.unsplash.com/photo-1551754655-cd27e38d2076"
        },
        {
            id: 17,
            title: "სოკო — 500 გ",
            desc: "გამოიყენება პიცაში, სუპებსა და შემწვარ კერძებში.",
            price: "6",
            imgSrc: "https://images.unsplash.com/photo-1504545102780-26774c1bb073"
        },
        {
            id: 18,
            title: "ბადრიჯანი — 1 კგ",
            desc: "შესაფერისია შესაწვავად და ბოსტნეულის კერძებისთვის.",
            price: "5",
            imgSrc: "https://images.unsplash.com/photo-1651221520127-8c1f6e3d0b1d"
        },
        {
            id: 19,
            title: "ბულგარული წიწაკა — 1 კგ",
            desc: "გამოიყენება სალათებში, ჩაშუშულ კერძებსა და შიგთავსიან წიწაკაში.",
            price: "6",
            imgSrc: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83"
        },
        {
            id: 20,
            title: "კომბოსტო — 1 კგ",
            desc: "გამოდგება სალათის, მწნილისა და კომბოსტოს კერძებისთვის.",
            price: "2",
            imgSrc: "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f"
        },
        {
            id: 21,
            title: "ყვავილოვანი კომბოსტო — 1 კგ",
            desc: "შეიძლება მოხარშო, გამოაცხო ან გამოიყენო ბოსტნეულის კერძებში.",
            price: "5",
            imgSrc: "https://images.unsplash.com/photo-1568584711271-6c929fb49b60"
        },
        {
            id: 22,
            title: "ბროკოლი — 500 გ",
            desc: "ბოსტნეული, რომელიც უხდება გარნირებსა და მსუბუქ კერძებს.",
            price: "5",
            imgSrc: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc"
        },
        {
            id: 23,
            title: "ჭარხალი — 1 კგ",
            desc: "გამოიყენება სალათებში, ბორშჩსა და სხვა კერძებში.",
            price: "2.50",
            imgSrc: "https://images.unsplash.com/photo-1593105544559-ecb03bf76f82"
        },
        {
            id: 24,
            title: "ნიორი — 250 გ",
            desc: "არომატული ინგრედიენტი სოუსებისა და ხორცის კერძებისთვის.",
            price: "3",
            imgSrc: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383"
        },
        {
            id: 25,
            title: "ლიმონი — 1 კგ",
            desc: "გამოიყენება სასმელებში, სალათებსა და თევზის კერძებში.",
            price: "5",
            imgSrc: "https://images.unsplash.com/photo-1590502593747-42a996133562"
        },
        {
            id: 26,
            title: "მსხალი — 1 კგ",
            desc: "ტკბილი ხილი ყოველდღიური წასახემსებლისა და დესერტისთვის.",
            price: "5",
            imgSrc: "https://images.unsplash.com/photo-1514756331096-242fdeb70d4a"
        },
        {
            id: 27,
            title: "ყურძენი — 1 კგ",
            desc: "წვნიანი ხილი, რომელიც კარგია ცალკე მისართმევად.",
            price: "6",
            imgSrc: "https://images.unsplash.com/photo-1537640538966-79f369143f8f"
        },
        {
            id: 28,
            title: "კივი — 1 კგ",
            desc: "მჟავატკბილი ხილი, რომელიც შეიცავს C ვიტამინს.",
            price: "7",
            imgSrc: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71"
        },
        {
            id: 29,
            title: "მანდარინი — 1 კგ",
            desc: "წვნიანი ციტრუსი მსუბუქი წასახემსებლისთვის.",
            price: "4",
            imgSrc: "https://images.unsplash.com/photo-1609424572698-04d9d2e04954"
        },
        {
            id: 30,
            title: "საზამთრო — 1 კგ",
            desc: "წყლით მდიდარი ხილი, რომელიც განსაკუთრებით სასიამოვნოა ზაფხულში.",
            price: "2",
            imgSrc: "https://images.unsplash.com/photo-1563114773-84221bd62daa"
        },
        {
            id: 31,
            title: "ნესვი — 1 კგ",
            desc: "ტკბილი და არომატული ხილი დესერტისა და წასახემსებლისთვის.",
            price: "3",
            imgSrc: "https://images.unsplash.com/photo-1571575173700-afb9492e6a50"
        },
        {
            id: 32,
            title: "მარწყვი — 500 გ",
            desc: "არომატული კენკრა დესერტების, იოგურტისა და სმუზის მოსამზადებლად.",
            price: "7",
            imgSrc: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6"
        },
        {
            id: 33,
            title: "ლურჯი მოცვი — 125 გ",
            desc: "კენკრა, რომელიც უხდება ფაფას, იოგურტსა და დესერტებს.",
            price: "6",
            imgSrc: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e"
        },
        {
            id: 34,
            title: "ქიშმიში — 200 გ",
            desc: "გამხმარი ყურძენი ფაფის, ნამცხვრისა და წასახემსებლისთვის.",
            price: "4",
            imgSrc: "https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e"
        },
        {
            id: 35,
            title: "ნიგოზი — 200 გ",
            desc: "გამოიყენება ქართულ კერძებში, ნამცხვრებსა და სალათებში.",
            price: "7",
            imgSrc: "https://images.unsplash.com/photo-1563412885-139e4045ebc3"
        },
        {
            id: 36,
            title: "ნუში — 200 გ",
            desc: "თხილეული წასახემსებლად ან დესერტებში დასამატებლად.",
            price: "9",
            imgSrc: "https://images.unsplash.com/photo-1508061253366-f7da158b6d46"
        },
        {
            id: 37,
            title: "არაქისი — 200 გ",
            desc: "თხილეული, რომელიც გამოდგება წასახემსებლად.",
            price: "4",
            imgSrc: "https://images.unsplash.com/photo-1567892737950-30c4db37cd89"
        },
        {
            id: 38,
            title: "მზესუმზირის თესლი — 200 გ",
            desc: "მოხალული ან უმი თესლი მსუბუქი წასახემსებლისთვის.",
            price: "3",
            imgSrc: "https://images.unsplash.com/photo-1471943311424-646960669fbc"
        },
        {
            id: 39,
            title: "ჩიას თესლი — 200 გ",
            desc: "გამოიყენება პუდინგებში, ფაფებსა და იოგურტში.",
            price: "8",
            imgSrc: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4"
        },
        {
            id: 40,
            title: "წიწიბურა — 800 გ",
            desc: "მარცვლეული გარნირისა და ფაფის მოსამზადებლად.",
            price: "4",
            imgSrc: "https://images.unsplash.com/photo-1586201375761-83865001e31c"
        },
        {
            id: 41,
            title: "შვრიის ფანტელები — 500 გ",
            desc: "გამოიყენება ფაფისა და საუზმის მოსამზადებლად.",
            price: "4",
            imgSrc: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf"
        },
        {
            id: 42,
            title: "სიმინდის ფქვილი — 1 კგ",
            desc: "გამოიყენება მჭადის, ღომისა და სხვა კერძების მოსამზადებლად.",
            price: "3",
            imgSrc: "https://images.unsplash.com/photo-1601593768790-4f4b1b6a6f89"
        },
        {
            id: 43,
            title: "ხორბლის ფქვილი — 2 კგ",
            desc: "ძირითადი ინგრედიენტი პურისა და ცომეულის მოსამზადებლად.",
            price: "4.50",
            imgSrc: "https://images.unsplash.com/photo-1627485937980-221c88ac04f9"
        },
        {
            id: 44,
            title: "საფუარი — 11 გ",
            desc: "გამოიყენება პურისა და საფუარიანი ცომის მოსამზადებლად.",
            price: "1",
            imgSrc: "https://images.unsplash.com/photo-1587049352851-8d4e89133924"
        },
        {
            id: 45,
            title: "გამაფხვიერებელი — 100 გ",
            desc: "ეხმარება ნამცხვარსა და ცომეულს გაფუებაში.",
            price: "2",
            imgSrc: "https://images.unsplash.com/photo-1627485937980-221c88ac04f9"
        },
        {
            id: 46,
            title: "კაკაოს ფხვნილი — 100 გ",
            desc: "გამოიყენება შოკოლადის სასმელებისა და დესერტების მოსამზადებლად.",
            price: "4",
            imgSrc: "https://images.unsplash.com/photo-1511381939415-e44015466834"
        },
        {
            id: 47,
            title: "ვანილი — 10 გ",
            desc: "არომატული ინგრედიენტი ნამცხვრებისა და ტკბილეულისათვის.",
            price: "1.50",
            imgSrc: "https://images.unsplash.com/photo-1511381939415-e44015466834"
        },
        {
            id: 48,
            title: "დარიჩინი — 50 გ",
            desc: "სურნელოვანი სანელებელი ფაფის, ყავისა და დესერტებისთვის.",
            price: "2.50",
            imgSrc: "https://images.unsplash.com/photo-1511381939415-e44015466834"
        },
        {
            id: 49,
            title: "შავი პილპილი — 50 გ",
            desc: "სანელებელი, რომელიც კერძებს პიკანტურ გემოს აძლევს.",
            price: "2",
            imgSrc: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d"
        },
        {
            id: 50,
            title: "პაპრიკა — 50 გ",
            desc: "წითელი წიწაკის ფხვნილი ხორცისა და ბოსტნეულის კერძებისთვის.",
            price: "2.50",
            imgSrc: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d"
        },
        {
            id: 51,
            title: "მარილი — 1 კგ",
            desc: "ძირითადი ინგრედიენტი კერძების შესაკაზმად.",
            price: "1.50",
            imgSrc: "https://images.unsplash.com/photo-1518110925495-5fe2fda0442a"
        },
        {
            id: 52,
            title: "შავი ჩაი — 100 გ",
            desc: "არომატული ცხელი სასმელი ყოველდღიური მოხმარებისთვის.",
            price: "4",
            imgSrc: "https://images.unsplash.com/photo-1544787219-7f47ccb76574"
        },
        {
            id: 53,
            title: "ყავა — 100 გ",
            desc: "არომატული სასმელი დილისა და დღის შესვენებისთვის.",
            price: "6",
            imgSrc: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e"
        },
        {
            id: 54,
            title: "მინერალური წყალი — 1.5 ლ",
            desc: "სასმელი წყალი ყოველდღიური ჰიდრატაციისთვის.",
            price: "1.50",
            imgSrc: "https://images.unsplash.com/photo-1523362628745-0c100150b504"
        },
        {
            id: 55,
            title: "ვაშლის წვენი — 1 ლ",
            desc: "ხილის სასმელი საუზმისა და წასახემსებლისთვის.",
            price: "4",
            imgSrc: "https://images.unsplash.com/photo-1600271886742-f049cd451bba"
        },
        {
            id: 56,
            title: "ლიმონათი — 1 ლ",
            desc: "გაზიანი გამაგრილებელი სასმელი.",
            price: "2.50",
            imgSrc: "https://images.unsplash.com/photo-1513558161293-cdaf765edfd7"
        },
        {
            id: 57,
            title: "შავი შოკოლადი — 100 გ",
            desc: "შოკოლადი ინტენსიური კაკაოს გემოთი, დესერტისთვის ან წასახემსებლად.",
            price: "4",
            imgSrc: "https://images.unsplash.com/photo-1548907040-4d42c8b4e7a5"
        },
        {
            id: 58,
            title: "ორცხობილა — 300 გ",
            desc: "ტკბილი ცომეული ჩაისა და ყავასთან მისართმევად.",
            price: "3.50",
            imgSrc: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e"
        },
        {
            id: 59,
            title: "კარტოფილის ჩიფსი — 150 გ",
            desc: "ხრაშუნა წასახემსებელი სხვადასხვა არომატით.",
            price: "4",
            imgSrc: "https://images.unsplash.com/photo-1566478989037-eec170784d0b"
        },
        {
            id: 60,
            title: "ნაყინი — 500 მლ",
            desc: "გაყინული დესერტი ტკბილი გემოთი.",
            price: "6",
            imgSrc: "https://images.unsplash.com/photo-1563805042-7684c019e1cb"
        },
        {
            id: 61,
            title: "ხაჭაპური — 1 ცალი",
            desc: "ქართული ცომეული ყველის შიგთავსით, შესაფერისია საუზმისთვის.",
            price: "5",
            imgSrc: "https://images.unsplash.com/photo-1579751626657-72bc17010498"
        },
        {
            id: 62,
            title: "ლობიანი — 1 ცალი",
            desc: "ქართული ცომეული ლობიოს შიგთავსით.",
            price: "4",
            imgSrc: "https://images.unsplash.com/photo-1509440159596-0249088772ff"
        },
        {
            id: 63,
            title: "პიცა — 1 ცალი",
            desc: "ცომეული ყველით, პომიდვრის სოუსითა და სხვადასხვა დანამატით.",
            price: "12",
            imgSrc: "https://images.unsplash.com/photo-1513104890138-7c749659a591"
        },
        {
            id: 64,
            title: "ბურგერი — 1 ცალი",
            desc: "ფუნთუშა ხორცის კატლეტით, ბოსტნეულითა და სოუსით.",
            price: "10",
            imgSrc: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
        },
        {
            id: 65,
            title: "ჰოთ-დოგი — 1 ცალი",
            desc: "ფუნთუშა სოსისითა და სოუსებით.",
            price: "5",
            imgSrc: "https://images.unsplash.com/photo-1612392062126-2f1b2f6c3d35"
        },
        {
            id: 66,
            title: "კრუასანი — 1 ცალი",
            desc: "ფენოვანი ფრანგული ცომეული, შესაფერისია საუზმისთვის.",
            price: "3",
            imgSrc: "https://images.unsplash.com/photo-1555507036-ab1f4038808a"
        },
        {
            id: 67,
            title: "დონატი — 1 ცალი",
            desc: "ტკბილი ცომეული, ხშირად შოკოლადის ან შაქრის საფარით.",
            price: "2.50",
            imgSrc: "https://images.unsplash.com/photo-1551024506-0bccd828d307"
        },
        {
            id: 68,
            title: "ჩიზქეიქი — 1 ნაჭერი",
            desc: "ნაზი ყველის კრემით მომზადებული დესერტი.",
            price: "7",
            imgSrc: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad"
        },
        {
            id: 69,
            title: "ტორტი შოკოლადით — 1 ნაჭერი",
            desc: "შოკოლადის კრემიანი დესერტი ტკბილი გემოთი.",
            price: "6",
            imgSrc: "https://images.unsplash.com/photo-1578985545062-69928b1d9587"
        },
        {
            id: 70,
            title: "მაფინი — 1 ცალი",
            desc: "პატარა რბილი ნამცხვარი, რომელიც უხდება ჩაისა და ყავას.",
            price: "3",
            imgSrc: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa"
        },
        {
            id: 71,
            title: "ბლინები — 300 გ",
            desc: "თხელი ცომეული, რომელიც შეიძლება მიირთვა ტკბილი ან მარილიანი შიგთავსით.",
            price: "6",
            imgSrc: "https://images.unsplash.com/photo-1528207776546-365bb710ee93"
        },
        {
            id: 72,
            title: "ვაფლის ფირფიტები — 200 გ",
            desc: "ხრაშუნა ფირფიტები დესერტებისა და ტკბილეულის მოსამზადებლად.",
            price: "3",
            imgSrc: "https://images.unsplash.com/photo-1484723091739-30a097e8f929"
        },
        {
            id: 73,
            title: "მარშმელოუ — 150 გ",
            desc: "რბილი ტკბილეული, რომელიც შეიძლება მიირთვა ცალკე ან ცხელ კაკაოსთან.",
            price: "4",
            imgSrc: "https://images.unsplash.com/photo-1581798459219-318e76aecc7b"
        },
        {
            id: 74,
            title: "ჟელე — 100 გ",
            desc: "ხილის არომატის მქონე დესერტი, რომელიც წყლით მზადდება.",
            price: "2",
            imgSrc: "https://images.unsplash.com/photo-1488477181946-6428a0291777"
        },
        {
            id: 75,
            title: "პუდინგი — 125 გ",
            desc: "რბილი კრემოვანი დესერტი სხვადასხვა არომატით.",
            price: "2.50",
            imgSrc: "https://images.unsplash.com/photo-1488477181946-6428a0291777"
        },
        {
            id: 76,
            title: "კარამელი — 200 გ",
            desc: "ტკბილი კანფეტები კარამელის გემოთი.",
            price: "3",
            imgSrc: "https://images.unsplash.com/photo-1581798459219-318e76aecc7b"
        },
        {
            id: 77,
            title: "ჟელიბონი — 150 გ",
            desc: "ფერადი ჟელესებრი კანფეტები ხილის არომატებით.",
            price: "3.50",
            imgSrc: "https://images.unsplash.com/photo-1581798459219-318e76aecc7b"
        },
        {
            id: 78,
            title: "საღეჭი რეზინი — 1 შეკვრა",
            desc: "არომატული საღეჭი რეზინი ყოველდღიური გამოყენებისთვის.",
            price: "2",
            imgSrc: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b"
        },
        {
            id: 79,
            title: "მზესუმზირის ჰალვა — 300 გ",
            desc: "ტკბილეული მზესუმზირის თესლისგან.",
            price: "4",
            imgSrc: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5"
        },
        {
            id: 80,
            title: "ჩურჩხელა — 1 ცალი",
            desc: "ქართული ტრადიციული ტკბილეული ყურძნის ბადაგითა და თხილეულით.",
            price: "4",
            imgSrc: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5"
        },
        {
            id: 81,
            title: "ტორტილა — 6 ცალი",
            desc: "თხელი მრგვალი პური ტაკოსა და სხვადასხვა შიგთავსიანი კერძისთვის.",
            price: "6",
            imgSrc: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f"
        },
        {
            id: 82,
            title: "პიტას პური — 4 ცალი",
            desc: "რბილი ბრტყელი პური სენდვიჩებისა და შიგთავსიანი კერძებისთვის.",
            price: "4",
            imgSrc: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73"
        },
        {
            id: 83,
            title: "ტოსტის პური — 500 გ",
            desc: "რბილი დაჭრილი პური ტოსტებისა და სენდვიჩებისთვის.",
            price: "3.50",
            imgSrc: "https://images.unsplash.com/photo-1509440159596-0249088772ff"
        },
        {
            id: 84,
            title: "ბაგეტი — 1 ცალი",
            desc: "გრძელი ხრაშუნა პური, შესაფერისია სენდვიჩებისთვის.",
            price: "3",
            imgSrc: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73"
        },
        {
            id: 85,
            title: "კუსკუსი — 500 გ",
            desc: "ხორბლის მარცვლეულის პროდუქტი, რომელიც სწრაფად მზადდება.",
            price: "5",
            imgSrc: "https://images.unsplash.com/photo-1586201375761-83865001e31c"
        },
        {
            id: 86,
            title: "ქინოა — 300 გ",
            desc: "მარცვლეულის მსგავსი თესლი, რომელიც გამოიყენება სალათებსა და გარნირებში.",
            price: "8",
            imgSrc: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4"
        },
        {
            id: 87,
            title: "პოპკორნის მარცვლები — 500 გ",
            desc: "სიმინდის მარცვლები სახლის პირობებში პოპკორნის მოსამზადებლად.",
            price: "4",
            imgSrc: "https://images.unsplash.com/photo-1578849278619-e73505e9610f"
        },
        {
            id: 88,
            title: "ტაკოს სუნელი — 30 გ",
            desc: "სანელებლების ნაზავი მექსიკური კერძების მოსამზადებლად.",
            price: "2.50",
            imgSrc: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d"
        },
        {
            id: 89,
            title: "კარის სანელებელი — 50 გ",
            desc: "არომატული სანელებლების ნაზავი ბრინჯისა და ხორცის კერძებისთვის.",
            price: "3",
            imgSrc: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d"
        },
        {
            id: 90,
            title: "ქოქოსის რძე — 400 მლ",
            desc: "მცენარეული პროდუქტი კარის, სუპებისა და დესერტებისთვის.",
            price: "6",
            imgSrc: "https://images.unsplash.com/photo-1517663400266-0251440c45dc"
        },
        {
            id: 91,
            title: "შვრიის სასმელი — 1 ლ",
            desc: "მცენარეული სასმელი ყავისა და საუზმისთვის.",
            price: "7",
            imgSrc: "https://images.unsplash.com/photo-1550583724-b2692b85b150"
        },
        {
            id: 92,
            title: "სოიოს სასმელი — 1 ლ",
            desc: "მცენარეული სასმელი, რომელიც შეიძლება გამოიყენო ყავასა და ფაფაში.",
            price: "6",
            imgSrc: "https://images.unsplash.com/photo-1563636619-e9143da7973b"
        },
        {
            id: 93,
            title: "ტოფუ — 300 გ",
            desc: "სოიოსგან დამზადებული პროდუქტი, შესაფერისია შეწვისა და სალათებისთვის.",
            price: "8",
            imgSrc: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
        },
        {
            id: 94,
            title: "ჰუმუსი — 200 გ",
            desc: "ნოყიერი პასტა მუხუდოსგან, რომელიც უხდება პურსა და ბოსტნეულს.",
            price: "5",
            imgSrc: "https://images.unsplash.com/photo-1577906096429-f73c2c312435"
        },
        {
            id: 95,
            title: "მუხუდო — 500 გ",
            desc: "პარკოსანი მცენარე სუპების, სალათებისა და ჰუმუსის მოსამზადებლად.",
            price: "4",
            imgSrc: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4"
        },
        {
            id: 96,
            title: "კუსკუსის სალათი — 250 გ",
            desc: "მზა სალათი მარცვლეულითა და ბოსტნეულით.",
            price: "7",
            imgSrc: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
        },
    ];

}

export default Prouct