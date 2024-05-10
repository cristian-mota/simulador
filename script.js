@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 14px;
}

body {    
    min-height: 100vh;
    padding: 5px 0;
    text-align: center;
    background: #010101;
    font-family: sans-serif;

}

.container {
    min-height: 100vh;
    margin: 0 auto;
    background: #f7f7f7;
}

.container header {
    display: flex;
    flex-direction: column;
}

.container #logo {
    width: 150px;
    padding: 10px;    
}

.container header h2 {
    font-size: 1.4em;
    margin: 10px 0;
}

.container .wrapper_content {
    background: #EBEEEC;
    /*border: 1px solid red;*/
}

.container .wrapper_content .container_valor_supertroco {
    overflow: auto;
}

.container .wrapper_content .container_valor_supertroco .wrapper_supertroco {
    width: max-content;
    margin: 10px auto;
    padding: 15px 30px 10px 30px;
    position: relative;
    background: #fff;
    border-radius: 3px;
    /*border: 1px solid green;*/
}

.container .wrapper_content .container_valor_supertroco .wrapper_supertroco label {
    position: absolute;
    top: calc(50% + 3px);
    left: 50%;
    transform: translate(-50%,-50%);
    font-size: 1.2em;
    white-space: nowrap;
    color: silver;
    pointer-events: none;
    transition: all ease-in 100ms;
}
.container .wrapper_content .container_valor_supertroco .wrapper_supertroco .action_label {
    top: 15px;
    left: 40%;
    padding: 0 5px;
    font-size: .900em;
    color: #31BF60;
    background: #fff;
}

.container .wrapper_content .container_valor_supertroco .wrapper_supertroco input {
    width: 175px;
    line-height: 40px;
    padding: 5px 10px 0;
    text-align: center;
    font-size: 1.8em;
    font-weight: 800;
    color: #31BF60;
    border: 2px solid rgba(0,0,0,0.1);
    outline: none;
    transition: ease-out .2s;
}

.container .wrapper_content .container_valor_supertroco .wrapper_buttons {
    display: flex;
    justify-content: center;
    gap: 25px;
    margin: 20px 0;    
    /*border: 1px solid red;*/
}

.container .wrapper_content .container_valor_supertroco .wrapper_buttons button {
    border: none;
    color: #fff;
    font-size: 1em;
    font-weight: bold;
    padding: 10px 16px;
    border-radius: 3px;
    cursor: pointer;
}

.container .wrapper_content .container_valor_supertroco .wrapper_buttons button:nth-child(1) {    
    background: #35CC66;    
}
.container .wrapper_content .container_valor_supertroco .wrapper_buttons button:nth-child(2) {
    background: #ffbd52;    
}


.container .wrapper_content .container_valor_supertroco .wrapper_numbers {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin: 25px 0 30px 0;
    /*border: 1px solid red;*/
}

.container .wrapper_content .container_valor_supertroco .wrapper_numbers span {
    flex-shrink: 0;
    display: grid;
    place-items: center;
    width: 40px;
    height: 40px;
    font-size: 1.2em;
    border-radius: 50%;
    background: #fff;    
    border: 3px solid #FFC569;
}

.container .wrapper_content .container_valor_supertroco .wrapper_awards,
.container .wrapper_content .container_valor_supertroco .wrapper_awards .award_one,
.container .wrapper_content .container_valor_supertroco .wrapper_awards .award_two,
.container .wrapper_content .container_valor_supertroco .wrapper_awards .award_tree,
.container .wrapper_content .container_valor_supertroco .wrapper_awards div .wrapper_multiplier_award .wrapper_multiplier {
    display: flex;
    flex-direction: column;
    border-radius: 3px;
    border: 3px solid #fff;
}

.container .wrapper_content .container_valor_supertroco .wrapper_awards div .wrapper_multiplier_award .wrapper_multiplier {
    padding: 3px;
}

.container .wrapper_content .container_valor_supertroco .wrapper_awards > div {
    width: 90%;
    background: #fff;
    padding: 0px;
    margin: 5px auto;
}

.container .wrapper_content .container_valor_supertroco .wrapper_awards div .wrapper_multiplier_award .wrapper_multiplier span:nth-child(1) {
    color: rgba(0,0,0,0.8);
}

.container .wrapper_content .container_valor_supertroco .wrapper_awards div .wrapper_multiplier_award .wrapper_multiplier span:nth-child(2) {
    color: #FFC569;
    font-size: 1.3rem;
    font-weight: 700;
}

.container .wrapper_content .container_valor_supertroco .wrapper_awards div .wrapper_multiplier_award {
    padding: 0px;
    border-radius: 3px;
    background: #EBEEEC;
    /*border: 1px solid red;*/
}

.container .wrapper_content .container_valor_supertroco .wrapper_awards div .wrapper_multiplier_award > div {
    width: 40%;
    background: #fff;
}

.container .wrapper_content .container_valor_supertroco .wrapper_awards div .wrapper_multiplier_award .wrapper_award {
    min-width: 150px;
    display: grid;
    place-items: center;
    padding: 5px;
    border-radius: 3px;
    color: #35CC66;
    font-weight: 700;
    font-size: 1.5rem;
}

.container .wrapper_content .container_valor_supertroco .wrapper_awards div .wrapper_head,
.container .wrapper_content .container_valor_supertroco .wrapper_awards div .wrapper_multiplier_award {
    display: flex;
    justify-content: space-between;
    padding: 4px;
}

.container .wrapper_content .container_valor_supertroco .wrapper_awards div .wrapper_head > span {
    color: gray;
    font-size: 1.2em;
}

.container .wrapper_content .container_valor_supertroco .wrapper_awards div .wrapper_head .wrapper_lucky_number {
    display: flex;
    gap: 3px;
}

.container .wrapper_content .container_valor_supertroco .wrapper_awards div .wrapper_head .wrapper_lucky_number span {
    display: grid;
    place-items: center;
    font-size: .850em;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 2px solid #FFC569;
}



@media only screen and (min-width:520px) {
    .container {
        width: 470px;       
        border: 2px solid #000;
    }        
}
