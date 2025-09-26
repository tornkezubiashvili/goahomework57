let score = prompt("შეიყვანე შენი ქულა 0-100; ")


if (score < 50) {
    console.log("ჩაიჭერი")
} else if (score > 50 & score < 69) {
    console.log("საშვალო")
} else if (score > 90 & score < 100) {
    console.log("ძალიან კარგი")
} else {
    console.log("არასწორი მონაცემი")
}