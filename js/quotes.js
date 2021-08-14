const quotes = [
    {
        quote: "부자처럼 생각하고 부자처럼 행동하라. 나도 모르는 사이에 부자가 되어 있다.",
        author: "이건희",
    }, {
        quote: "오직 돈 버는 일과 돈 그 자체만을 위해 평생을 바친 사람보다 더 비열하고 치사한 존재는 없다",
        author: "존 D 록펠러",
    }, {
        quote: "돈은 자신의 수입을 관리할 수 있는 간단한 법칙을 이해하는 사람에게만 몰린다.",
        author: "조지 클라슨",
    }, {
        quote: "어느 순간을 지나고 나면 돈은 의미 없는 것이 되고 만다. 목표를 달성하는 것은 중요치 않다. 중요한 것은 과정 그 자체다.",
        author: "아리스토텔레스",
    }, {
        quote: "돈이 독립을 위한 당신의 희망이라면, 당신은 결코 그 독립을 얻지 못할 것이다. 인간이 이 세상에서 가질 수 있는 유일하고 실제적인 안전장치는 바로 지식과 경험, 그리고 능력을 쌓는 것이다.",
        author: "헨리 포드",
    }, {
        quote: "혁신을 하려면 다른 모든 사람들에게 미친 놈 소리를 들을 각오를 해야 한다.",
        author: "래리 엘리슨",
    }, {
        quote: "스스로 부자인 척해도 아무것도 없는 사람이 있고, 스스로 가난한 척해도 재물이 많은 자가 있느니라.",
        author: "잠언 13장 7절",
    }, {
        quote: "위험은 자신이 무엇을 하는지 모르는 데서 온다",
        author: "워렌 버핏",
    }, {
        quote: "이 세상 누구와도 자신을 비교하지 마세요. 그렇게 하면 자신을 모욕하는 겁니다.",
        author: "빌 게이츠",
    }, {
        quote: "경제란 석탄을 아끼는 데 있는 것이 아니라 그것이 불타고 있을 동안 시간을 이용하는 데 있다. ",
        author: "랄프 왈도 에머슨",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;