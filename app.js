let time = new Date().getHours();

function TimeChange() {
    if (time >= 6 && time < 18) {

        Header.style.backgroundColor = 'lightblue'
        logo.style.color = 'black';
        nav.style.backgroundColor = 'lightblue';
        a.style.color = 'black';
        a1.style.color = 'black';
        a2.style.color = 'black';
        a3.style.color = 'black';
        a4.style.color = 'black';





        Home.style.backgroundColor = 'lightblue';

        textBlock.style.backgroundColor = 'lightblue';
        text1.style.color = 'black';
        text2.style.color = 'black';
        text3.style.color = 'black';
        text4.style.color = 'black';
        line.style.backgroundColor = 'black';
        About.style.backgroundColor = 'lightblue';
        AboutText.style.color = 'black';
        AboutCont.style.backgroundColor = 'lightblue';
        AboutTextCont.style.backgroundColor = 'lightblue';
        AboutText1.style.color = 'black';
        AboutOne.style.color = 'black';
        AboutTwo.style.color = 'black';
        line1.style.backgroundColor = 'black';
        ul.style.backgroundColor = 'lightblue';
        liBlock.style.backgroundColor = 'lightblue';
        myName.style.backgroundColor = 'lightblue';
        myName.style.border = '2px solid black';
        myName.style.color = 'black';

        Contact.style.backgroundColor = "lightblue";









        const footer = document.getElementById("footer");
        footer.style.backgroundColor = "lightblue";

        const elements = document.querySelectorAll("#footer *");
        elements.forEach(element => {
            element.style.color = "black";

        });
        footerNav.style.backgroundColor = 'lightblue';

        const Directions = document.getElementById("directions");
        Directions.style.backgroundColor = "lightblue";

        const Directionselements = document.querySelectorAll("#directions *");
        Directionselements.forEach(dicelement => {
            dicelement.style.color = "black";
            dicelement.style.backgroundColor = "lightblue";




        });


        directionsDesighn.style.border = '1px solid black'
        directionsBtn.style.backgroundColor = 'lightblue';
        directionsBtn.style.border = '1px solid black'
        directionsCode.style.border = '1px solid black';
        directionsBtn2.style.border = '1px solid black'


        const four = document.getElementById("four");
        four.style.backgroundColor = "lightblue";

        const fourElements = document.querySelectorAll("#four *");
        fourElements.forEach(fourelement => {
            fourelement.style.color = "black";
            fourelement.style.backgroundColor = 'lightblue';



        });
        fourBlock.style.border = "1px solid black"
        fourBlock2.style.border = "1px solid black";
        fourBlock3.style.border = "1px solid black"

        const work = document.getElementById("work");
        work.style.backgroundColor = "lightblue";




        const workElements = document.querySelectorAll("#work *");
        workElements.forEach(workelement => {
            workelement.style.color = "black";
            workelement.style.backgroundColor = 'lightblue';





        });
        const work2 = document.getElementById("work2");
        work2.style.backgroundColor = "lightblue"

        const workElements2 = document.querySelectorAll("#work2 *");
        workElements2.forEach(workelement2 => {
            workelement2.style.color = "black";
            workelement2.style.backgroundColor = 'lightblue';





        });
        const work3 = document.getElementById("work3");
        work3.style.backgroundColor = "lightblue"

        const workElements3 = document.querySelectorAll("#work3 *");
        workElements3.forEach(workelement3 => {
            workelement3.style.color = "black";
            workelement3.style.backgroundColor = 'lightblue';





        });
        const work4 = document.getElementById("work4");
        work4.style.backgroundColor = "lightblue"

        const workElements4 = document.querySelectorAll("#work4 *");
        workElements4.forEach(workelement4 => {
            workelement4.style.color = "black";
            workelement4.style.backgroundColor = 'lightblue';





        });

        const work5 = document.getElementById("work5");
        work5.style.backgroundColor = "lightblue"

        const workElements5 = document.querySelectorAll("#work5 *");
        workElements5.forEach(workelement5 => {
            workelement5.style.color = "black";
            workelement5.style.backgroundColor = 'lightblue';





        });
        workBlock.style.border = '1px solid black'

        workCont.style.border = '1px solid black'
        workBtn.style.border = '1px solid black'
        workBtnView.style.border = '1px solid black'

        work2Block.style.border = '1px solid black'

        work2Cont.style.border = '1px solid black'
        work2Btn.style.border = '1px solid black'
        work2BtnView.style.border = '1px solid black'



        work3Block.style.border = '1px solid black'

        work3Cont.style.border = '1px solid black'
        work3Btn.style.border = '1px solid black'
        work3BtnView.style.border = '1px solid black'

        work4Block.style.border = '1px solid black'

        work4Cont.style.border = '1px solid black'
        work4Btn.style.border = '1px solid black'
        work4BtnView.style.border = '1px solid black'



        work5Block.style.border = '1px solid black'

        work5Cont.style.border = '1px solid black'
        work5Btn.style.border = '1px solid black'
        work5BtnView.style.border = '1px solid black'










        li.style.color = 'black'
        li1.style.color = 'black'
        li2.style.color = 'black'
        li3.style.color = 'black'
        li4.style.color = 'black'
        li5.style.color = 'black'
        li6.style.color = 'black'
        li7.style.color = 'black'
        li8.style.color = 'black'
        li9.style.color = 'black'
        li10.style.color = 'black'
        li11.style.color = 'black'




    }
    else {
        Cont.style.backgroundColor = 'black';

        Header.style.backgroundColor = 'blavk'
        logo.style.color = 'ligtblue';
        nav.style.backgroundColor = 'black';
        a.style.color = 'lightblue';
        a1.style.color = 'lightblue';
        a2.style.color = 'lightblue';
        a3.style.color = 'lightblue';
        a4.style.color = 'lightblue';







    }

}
TimeChange()



