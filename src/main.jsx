import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import './actions.js'
//import './pieChartCalculate.jsx'

let resetChartData1=[
    {name:"Medical Center", value:0,color:"#f0bf00"},
    {name:"State Unrestricted", value:0,color:"#f6e50e"},
    {name:"Tuition", value:0,color:"#fff688"},
    {name:"Student Fees", value:0,color:"#5f63ec"},
    {name:"Grants and Contracts", value:0,color:"#71a8ff"},
    {name:"Pell Grants", value:0,color:"#58c9fb"},
    {name:"Gifts, Endowments, Interest", value:0,color:"#0f7ab4"},
    {name:"Other", value:0,color:"#d4e4ff"}
  ];

let pieChartData1=[
    {name:"Medical Center", value:0,color:"#f0bf00"},
    {name:"State Unrestricted", value:0,color:"#f6e50e"},
    {name:"Tuition", value:0,color:"#fff688"},
    {name:"Student Fees", value:0,color:"#5f63ec"},
    {name:"Grants and Contracts", value:0,color:"#71a8ff"},
    {name:"Sales and Service, Auxiliary", value:0,color:"#58c9fb"},
    {name:"Gifts, Endowments, Interest", value:0,color:"#0f7ab4"},
    {name:"Other", value:0,color:"#d4e4ff"}
  ];
//45,4,7,11,10,11,7,5
let pieChartData1_standard=[
    {name:"Medical Center", value:45,color:"#f0bf00"},
    {name:"Student Fees", value:4,color:"#f6e50e"},
    {name:"Tuition", value:7,color:"#fff688"},
    {name:"Student Fees", value:11,color:"#5f63ec"},
    {name:"Grants and Contracts", value:10,color:"#71a8ff"},
    {name:"Sales and Service, Auxiliary", value:11,color:"#58c9fb"},
    {name:"Gifts, Endowments, Interest", value:7,color:"#0f7ab4"},
    {name:"Other", value:5,color:"#d4e4ff"}
  ];

let resetChartData2=[
  {name:"Medical Center", value:0,color:"#f0bf00"},
  {name:"Instruction And Academic Support", value:0,color:"#f6e50e"},
  {name:"Research", value:0,color:"#fff688"},
  {name:"Student Services and Financial Aid", value:0,color:"#5f63ec"},
  {name:"Deprecation/Interest Expenses", value:0,color:"#71a8ff"},
  {name:"Institutional Support", value:0,color:"#58c9fb"},
  {name:"Other", value:0,color:"#d4e4ff"}
]

let pieChartData2=[
  {name:"Medical Center", value:0,color:"#f0bf00"},
  {name:"Instruction And Academic Support", value:0,color:"#f6e50e"},
  {name:"Research", value:0,color:"#fff688"},
  {name:"Student Services and Financial Aid", value:0,color:"#5f63ec"},
  {name:"Deprecation/Interest Expenses", value:0,color:"#71a8ff"},
  {name:"Institutional Support", value:0,color:"#58c9fb"},
  {name:"Other", value:0,color:"#d4e4ff"}
]

let pieChartData2_standard=[
  {name:"Medical Center", value:43,color:"#f0bf00"},
  {name:"Instruction And Academic Support", value:23,color:"#f6e50e"},
  {name:"Research", value:11,color:"#fff688"},
  {name:"Student Services and Financial Aid", value:8,color:"#5f63ec"},
  {name:"Deprecation/Interest Expenses", value:6,color:"#71a8ff"},
  {name:"Institutional Support", value:4,color:"#58c9fb"},
  {name:"Other", value:5,color:"#d4e4ff"}
]

var itemsValue=[0,0,0,0,0,0,0,0];
var total1=0;
var total2=0;

//first render the chart

      ReactDOM.render(
        <React.StrictMode>
          <App data={resetChartData1} string1="UC Davis Revenues"/>
        </React.StrictMode>,
        document.getElementById('root1')
      )
//chage the chart and data
let chart_MC=document.getElementById('FirstInputValue');
chart_MC.addEventListener('change',updateFirstInput);

let chart_SU=document.getElementById('SecondInputValue');
chart_SU.addEventListener('change',updateSecondInput);

let chart_Tui=document.getElementById('ThirdInputValue');
chart_Tui.addEventListener('change',updateThirdInput);

let chart_SF=document.getElementById('FourthInputValue');
chart_SF.addEventListener('change',updateFourthInput);

let chart_GandC=document.getElementById('FifthInputValue');
chart_GandC.addEventListener('change',updateFifthInput);

let chart_SandSA=document.getElementById('SixthInputValue');
chart_SandSA.addEventListener('change',updateSixthInput);

let chart_GEI=document.getElementById('seventhInputValue');
chart_GEI.addEventListener('change',updateSeventhInput);

let chart_Other=document.getElementById('eighthInputValue');
chart_Other.addEventListener('change',updateEighthInput);

//info listener
let info_First=document.getElementById("firstInfo");
info_First.addEventListener('click',updateFirstInfo);

let info_Second=document.getElementById("secondInfo");
info_Second.addEventListener('click',updateSecondInfo);

let info_Third=document.getElementById("thirdInfo");
info_Third.addEventListener('click',updateThirdInfo);

let info_Fourth=document.getElementById("fourthInfo");
info_Fourth.addEventListener('click',updateFourthInfo);

let info_Fifth=document.getElementById("fifthInfo");
info_Fifth.addEventListener('click',updateFifthInfo);

let info_Sixth=document.getElementById("sixthInfo");
info_Sixth.addEventListener('click',updateSixthInfo);

let info_Seventh=document.getElementById("seventhInfo");
info_Seventh.addEventListener('click',updateSeventhInfo);

let info_Eighth=document.getElementById("eighthInfo");
info_Eighth.addEventListener('click',updateEighthInfo);

//button listener
let btn_next=document.getElementById('next');
btn_next.addEventListener('click',nextFunction);

let btn_compare=document.getElementById("compare");
btn_compare.addEventListener('click',compareFunction);

let btn_previous=document.getElementById("previous");
btn_previous.addEventListener('click',previousFunction);

let btn_restart=document.getElementById("restart");
btn_restart.addEventListener('click',restartFunction);

function updateFirstInput(){
  let shape_circle2=document.getElementById("circle2");
  //stage1
  if(shape_circle2.classList=="greyColor"){
    
      ReactDOM.render(
        <React.StrictMode>
          <App data={resetChartData1} string1="UC Davis Revenues"/>
        </React.StrictMode>,
        document.getElementById('root1')
      )   
    
    itemsValue[0]=parseInt(document.getElementById("FirstInputValue").value);
    if(itemsValue[0]<0){
      itemsValue[0]=0;
      document.getElementById("FirstInputValue").value=0;
    }

    let sum=0;
    let oldSum=0;
    var i;
    for(i=0;i<8;i++){
      sum+=itemsValue[i];
      //alert("Sum is"+sum);
      if(sum>100){
          //alert("Out of scope");
          oldSum=sum;
          sum=100;
          oldSum-=sum;
          itemsValue[0]-=oldSum;
          pieChartData1[0].value=itemsValue[0];
          document.getElementById("FirstInputValue").value=itemsValue[0];
          break;
      }
    }
    pieChartData1[0].value=itemsValue[0];
    document.getElementById("totalValue").value=sum;
    total1=sum;

    ReactDOM.render(
        <React.StrictMode>
          <App data={pieChartData1} string1="UC Davis Revenues"/>
        </React.StrictMode>,
        document.getElementById('root1')
      )
  }
  //stage2
  else{
    ReactDOM.render(
        <React.StrictMode>
          <App data={resetChartData2} string1="UC Davis Expenditures"/>
        </React.StrictMode>,
        document.getElementById('root2')
      )   

    itemsValue[0]=parseInt(document.getElementById("FirstInputValue").value);
    let oldValue=0;
    if(itemsValue[0]<0){
      itemsValue[0]=0;
      document.getElementById("FirstInputValue").value=0;
    }

    let sum=0;
    let oldSum=0;
    var i;
    for(i=0;i<8;i++){
      sum+=itemsValue[i];
      //alert("Sum is"+sum);
      if(sum>100){
          //alert("Out of scope");
          oldSum=sum;
          sum=100;
          oldSum-=sum;
          itemsValue[0]-=oldSum;
          pieChartData2[0].value=itemsValue[0];
          document.getElementById("FirstInputValue").value=itemsValue[0];
          break;
      }
    }
    pieChartData2[0].value=itemsValue[0];
    document.getElementById("totalValue").value=sum;
    total2=sum;

    ReactDOM.render(
        <React.StrictMode>
          <App data={pieChartData2} string1="UC Davis Expenditures"/>
        </React.StrictMode>,
        document.getElementById('root2')
      )
  }
}

function updateSecondInput(){
  let shape_circle2=document.getElementById("circle2");
  //stage1
  if(shape_circle2.classList=="greyColor"){
    ReactDOM.render(
        <React.StrictMode>
          <App data={resetChartData1} string1="UC Davis Revenues"/>
        </React.StrictMode>,
        document.getElementById('root1')
      ) 

    itemsValue[1]=parseInt(document.getElementById("SecondInputValue").value);
    if(itemsValue[1]<0){
      itemsValue[1]=0;
      document.getElementById("SecondInputValue").value=0;
    }

    let sum=0;
    let oldSum=0;
    var i;
    for(i=0;i<8;i++){
      sum+=itemsValue[i];
      //alert("Sum is"+sum);
      if(sum>100){
          //alert("Out of scope");
          oldSum=sum;
          sum=100;
          oldSum-=sum;
          itemsValue[1]-=oldSum;
          pieChartData1[1].value=itemsValue[1];
          break;
      }
    }
    pieChartData1[1].value=itemsValue[1];
    document.getElementById("SecondInputValue").value=itemsValue[1];
    document.getElementById("totalValue").value=sum;
    total1=sum;
    
    ReactDOM.render(
        <React.StrictMode>
          <App data={pieChartData1} string1="UC Davis Revenues"/>
        </React.StrictMode>,
        document.getElementById('root1')
      )
  }
  //stage2
  else{
     ReactDOM.render(
        <React.StrictMode>
          <App data={resetChartData2} string1="UC Davis Expenditures"/>
        </React.StrictMode>,
        document.getElementById('root2')
      ) 

    itemsValue[1]=parseInt(document.getElementById("SecondInputValue").value);
    if(itemsValue[1]<0){
      itemsValue[1]=0;
      document.getElementById("SecondInputValue").value=0;
    }

    let sum=0;
    let oldSum=0;
    var i;
    for(i=0;i<8;i++){
      sum+=itemsValue[i];
      //alert("Sum is"+sum);
      if(sum>100){
          //alert("Out of scope");
          oldSum=sum;
          sum=100;
          oldSum-=sum;
          itemsValue[1]-=oldSum;
          pieChartData2[1].value=itemsValue[1];
          break;
      }
    }
    pieChartData2[1].value=itemsValue[1];
    document.getElementById("SecondInputValue").value=itemsValue[1];
    document.getElementById("totalValue").value=sum;
    total2=sum;

    ReactDOM.render(
        <React.StrictMode>
          <App data={pieChartData2} string1="UC Davis Expenditures"/>
        </React.StrictMode>,
        document.getElementById('root2')
      )
  }
}

function updateThirdInput(){
  let shape_circle2=document.getElementById("circle2");
  //stage1
  if(shape_circle2.classList=="greyColor"){
    ReactDOM.render(
      <React.StrictMode>
        <App data={resetChartData1} string1="UC Davis Revenues"/>
      </React.StrictMode>,
      document.getElementById('root1')
    ) 

    itemsValue[2]=parseInt(document.getElementById("ThirdInputValue").value);
    if(itemsValue[2]<0){
      itemsValue[2]=0;
      document.getElementById("ThirdInputValue").value=0;
    }

    let sum=0;
    let oldSum=0;
    var i;
    for(i=0;i<8;i++){
      sum+=itemsValue[i];
      //alert("Sum is"+sum);
      if(sum>100){
          //alert("Out of scope");
          oldSum=sum;
          sum=100;
          oldSum-=sum;
          itemsValue[2]-=oldSum;
          pieChartData1[2].value=itemsValue[2];
          break;
      }
    }
    pieChartData1[2].value=itemsValue[2];
    document.getElementById("ThirdInputValue").value=itemsValue[2];
    document.getElementById("totalValue").value=sum;
    total1=sum;

    ReactDOM.render(
        <React.StrictMode>
          <App data={pieChartData1} string1="UC Davis Revenues"/>
        </React.StrictMode>,
        document.getElementById('root1')
      )
  }
  else{
    ReactDOM.render(
      <React.StrictMode>
        <App data={resetChartData2} string1="UC Davis Expenditures"/>
      </React.StrictMode>,
      document.getElementById('root2')
    ) 

    itemsValue[2]=parseInt(document.getElementById("ThirdInputValue").value);
    if(itemsValue[2]<0){
      itemsValue[2]=0;
      document.getElementById("ThirdInputValue").value=0;
    }

    let sum=0;
    let oldSum=0;
    var i;
    for(i=0;i<8;i++){
      sum+=itemsValue[i];
      //alert("Sum is"+sum);
      if(sum>100){
          //alert("Out of scope");
          oldSum=sum;
          sum=100;
          oldSum-=sum;
          itemsValue[2]-=oldSum;
          pieChartData2[2].value=itemsValue[2];
          break;
      }
    }
    pieChartData2[2].value=itemsValue[2];
    document.getElementById("ThirdInputValue").value=itemsValue[2];
    document.getElementById("totalValue").value=sum;
    total2=sum;

    ReactDOM.render(
        <React.StrictMode>
          <App data={pieChartData2} string1="UC Davis Expenditures"/>
        </React.StrictMode>,
        document.getElementById('root2')
      )
  }
}

function updateFourthInput(){
  let shape_circle2=document.getElementById("circle2");
  //stage1
  if(shape_circle2.classList=="greyColor"){
    ReactDOM.render(
        <React.StrictMode>
          <App data={resetChartData1} string1="UC Davis Revenues"/>
        </React.StrictMode>,
        document.getElementById('root1')
      ) 

    itemsValue[3]=parseInt(document.getElementById("FourthInputValue").value);
    if(itemsValue[3]<0){
      itemsValue[3]=0;
      document.getElementById("FourthInputValue").value=0;
    }

    let sum=0;
    let oldSum=0;
    var i;
    for(i=0;i<8;i++){
      sum+=itemsValue[i];
      //alert("Sum is"+sum);
      if(sum>100){
          //alert("Out of scope");
          oldSum=sum;
          sum=100;
          oldSum-=sum;
          itemsValue[3]-=oldSum;
          pieChartData1[3].value=itemsValue[3];
          break;
      }
    }
    pieChartData1[3].value=itemsValue[3];
    document.getElementById("FourthInputValue").value=itemsValue[3];
    document.getElementById("totalValue").value=sum;
    total1=sum;

    ReactDOM.render(
        <React.StrictMode>
          <App data={pieChartData1} string1="UC Davis Revenues"/>
        </React.StrictMode>,
        document.getElementById('root1')
      )
  }
  //stage2
  else{
    ReactDOM.render(
        <React.StrictMode>
          <App data={resetChartData2} string1="UC Davis Expenditures"/>
        </React.StrictMode>,
        document.getElementById('root2')
      ) 

    itemsValue[3]=parseInt(document.getElementById("FourthInputValue").value);
    if(itemsValue[3]<0){
      itemsValue[3]=0;
      document.getElementById("FourthInputValue").value=0;
    }

    let sum=0;
    let oldSum=0;
    var i;
    for(i=0;i<8;i++){
      sum+=itemsValue[i];
      //alert("Sum is"+sum);
      if(sum>100){
          //alert("Out of scope");
          oldSum=sum;
          sum=100;
          oldSum-=sum;
          itemsValue[3]-=oldSum;
          pieChartData2[3].value=itemsValue[3];
          break;
      }
    }
    pieChartData2[3].value=itemsValue[3];
    document.getElementById("FourthInputValue").value=itemsValue[3];
    document.getElementById("totalValue").value=sum;
    total2=sum;
    
    ReactDOM.render(
        <React.StrictMode>
          <App data={pieChartData2} string1="UC Davis Expenditures"/>
        </React.StrictMode>,
        document.getElementById('root2')
      )
  }
}

function updateFifthInput(){
  let shape_circle2=document.getElementById("circle2");
  if(shape_circle2.classList=="greyColor"){
    ReactDOM.render(
        <React.StrictMode>
          <App data={resetChartData1} string1="UC Davis Revenues"/>
        </React.StrictMode>,
        document.getElementById('root1')
      ) 
    
    itemsValue[4]=parseInt(document.getElementById("FifthInputValue").value);
    if(itemsValue[4]<0){
      itemsValue[4]=0;
      document.getElementById("FifthInputValue").value=0;
    }
  
    let sum=0;
    let oldSum=0;
    var i;
    for(i=0;i<8;i++){
      sum+=itemsValue[i];
      //alert("Sum is"+sum);
      if(sum>100){
          //alert("Out of scope");
          oldSum=sum;
          sum=100;
          oldSum-=sum;
          itemsValue[4]-=oldSum;
          pieChartData1[4].value=itemsValue[4];
          break;
      }
    }

    pieChartData1[4].value=itemsValue[4];
    document.getElementById("FifthInputValue").value=itemsValue[4];
    document.getElementById("totalValue").value=sum;
    total1=sum;

    ReactDOM.render(
        <React.StrictMode>
          <App data={pieChartData1} string1="UC Davis Revenues"/>
        </React.StrictMode>,
        document.getElementById('root1')
      )
  }
  else{
    ReactDOM.render(
        <React.StrictMode>
          <App data={resetChartData2} string1="UC Davis Expenditures"/>
        </React.StrictMode>,
        document.getElementById('root2')
      ) 
    
    itemsValue[4]=parseInt(document.getElementById("FifthInputValue").value);
    if(itemsValue[4]<0){
      itemsValue[4]=0;
      document.getElementById("FifthInputValue").value=0;
    }
  
    let sum=0;
    let oldSum=0;
    var i;
    for(i=0;i<8;i++){
      sum+=itemsValue[i];
      //alert("Sum is"+sum);
      if(sum>100){
          //alert("Out of scope");
          oldSum=sum;
          sum=100;
          oldSum-=sum;
          itemsValue[4]-=oldSum;
          pieChartData2[4].value=itemsValue[4];
          break;
      }
    }
    pieChartData2[4].value=itemsValue[4];
    document.getElementById("FifthInputValue").value=itemsValue[4];
    document.getElementById("totalValue").value=sum;
    total2=sum;

    ReactDOM.render(
        <React.StrictMode>
          <App data={pieChartData2} string1="UC Davis Expenditures"/>
        </React.StrictMode>,
        document.getElementById('root2')
      )
  }
}

function updateSixthInput(){
    //alert("calculateTotal");
  let shape_circle2=document.getElementById("circle2");
  if(shape_circle2.classList=="greyColor"){
    ReactDOM.render(
        <React.StrictMode>
          <App data={resetChartData1} string1="UC Davis Revenues"/>
        </React.StrictMode>,
        document.getElementById('root1')
      ) 
    
    itemsValue[5]=parseInt(document.getElementById("SixthInputValue").value);
    if(itemsValue[5]<0){
      itemsValue[5]=0;
      document.getElementById("SixthInputValue").value=0;
    }

    let sum=0;
    let oldSum=0;
    var i;
    for(i=0;i<8;i++){
      sum+=itemsValue[i];
      //alert("Sum is"+sum);
      if(sum>100){
        //alert("Out of scope");
        oldSum=sum;
        sum=100;
        oldSum-=sum;
        itemsValue[5]-=oldSum;
        pieChartData1[5].value=itemsValue[5];
        document.getElementById("SixthInputValue").value=itemsValue[5];
        break;
      }
    }
    pieChartData1[5].value=itemsValue[5];
    document.getElementById("totalValue").value=sum;
    total1=sum;

    ReactDOM.render(
        <React.StrictMode>
          <App data={pieChartData1} string1="UC Davis Revenues"/>
        </React.StrictMode>,
        document.getElementById('root1')
      )
  }

  else{
    ReactDOM.render(
        <React.StrictMode>
          <App data={resetChartData2} string1="UC Davis Expenditures"/>
        </React.StrictMode>,
        document.getElementById('root2')
      ) 
    
    itemsValue[5]=parseInt(document.getElementById("SixthInputValue").value);
    if(itemsValue[5]<0){
      itemsValue[5]=0;
      document.getElementById("SixthInputValue").value=0;
    }

    let sum=0;
    let oldSum=0;
    var i;
    for(i=0;i<8;i++){
      sum+=itemsValue[i];
      //alert("Sum is"+sum);
      if(sum>100){
        //alert("Out of scope");
        oldSum=sum;
        sum=100;
        oldSum-=sum;
        itemsValue[5]-=oldSum;
        pieChartData2[5].value=itemsValue[5];
        document.getElementById("SixthInputValue").value=itemsValue[5];
        break;
      }
    }
    pieChartData2[5].value=itemsValue[5];
    document.getElementById("totalValue").value=sum;
    total2=sum;

    ReactDOM.render(
        <React.StrictMode>
          <App data={pieChartData2} string1="UC Davis Expenditures"/>
        </React.StrictMode>,
        document.getElementById('root2')
      )
  }
}

function updateSeventhInput(){
  //alert("seventh");
  //alert("calculateTotal");
  ReactDOM.render(
      <React.StrictMode>
      <App data={resetChartData1} string1="UC Davis Revenues"/>
      </React.StrictMode>,
      document.getElementById('root1')
    ) 
   
  itemsValue[6]=parseInt(document.getElementById("seventhInputValue").value);
  if(itemsValue[6]<0){
      itemsValue[6]=0;
      document.getElementById("seventhInputValue").value=0;
    }

  let sum=0;
  let oldSum=0;
  var i;
  for(i=0;i<8;i++){
    sum+=itemsValue[i];
    //alert("Sum is"+sum);
    if(sum>100){
        //alert("Out of scope");
        oldSum=sum;
        sum=100;
        oldSum-=sum;
        itemsValue[6]-=oldSum;
        pieChartData1[6].value=itemsValue[6];
        document.getElementById("seventhInputValue").value=itemsValue[6];
        break;
    }
  }

  pieChartData1[6].value=itemsValue[6];
  document.getElementById("totalValue").value=sum;
  total1=sum;

  ReactDOM.render(
      <React.StrictMode>
        <App data={pieChartData1} string1="UC Davis Revenues"/>
      </React.StrictMode>,
      document.getElementById('root1')
    )
}

function updateEighthInput(){
  //alert("eighth");
  let shape_circle2=document.getElementById("circle2");
  //stage1
  if(shape_circle2.classList=="greyColor"){
    ReactDOM.render(
        <React.StrictMode>
          <App data={resetChartData1} string1="UC Davis Revenues"/>
        </React.StrictMode>,
        document.getElementById('root1')
      ) 
    itemsValue[7]=parseInt(document.getElementById("eighthInputValue").value);

    if(itemsValue[7]<0){
      itemsValue[7]=0;
      document.getElementById("eighthInputValue").value=0;
    }

    let sum=0;
    let oldSum=0;
    var i;
    for(i=0;i<8;i++){
      sum+=itemsValue[i];
      //alert("Sum is"+sum);
      if(sum>100){
          //alert("Out of scope");
          oldSum=sum;
          sum=100;
          oldSum-=sum;
          itemsValue[7]-=oldSum;
          pieChartData1[7].value=itemsValue[7];
          document.getElementById("eighthInputValue").value=itemsValue[7];
          break;
      }
  }
    
  pieChartData1[7].value=itemsValue[7];
  document.getElementById("totalValue").value=sum;
  total1=sum;

  ReactDOM.render(
      <React.StrictMode>
        <App data={pieChartData1} string1="UC Davis Revenues"/>
      </React.StrictMode>,
      document.getElementById('root1')
    )
  }
  //stage2
  else{
    ReactDOM.render(
        <React.StrictMode>
          <App data={resetChartData2} string1="UC Davis Expenditures"/>
        </React.StrictMode>,
        document.getElementById('root2')
      ) 
    itemsValue[7]=parseInt(document.getElementById("eighthInputValue").value);
    if(itemsValue[7]<0){
      itemsValue[7]=0;
      document.getElementById("eighthInputValue").value=0;
    }

    let sum=0;
    let oldSum=0;
    var i;
    for(i=0;i<8;i++){
      sum+=itemsValue[i];
      //alert("Sum is"+sum);
      if(sum>100){
          //alert("Out of scope");
          oldSum=sum;
          sum=100;
          oldSum-=sum;
          itemsValue[7]-=oldSum;
          pieChartData2[6].value=itemsValue[7];
          document.getElementById("eighthInputValue").value=itemsValue[7];
          break;
      }
  }
    
  pieChartData2[6].value=itemsValue[7];
  document.getElementById("totalValue").value=sum;
  total2=sum;

  ReactDOM.render(
      <React.StrictMode>
        <App data={pieChartData2} string1="UC Davis Expenditures"/>
      </React.StrictMode>,
      document.getElementById('root2')
    )
  }
}

function nextFunction(){
  let shape_line1=document.getElementById("line1");
  let shape_circle2=document.getElementById("circle2");
  let shape_circle3=document.getElementById("circle3");
  let text_expenses=document.getElementById("expensesPB");

  //stage2
  if(shape_circle2.classList=="greyColor"){
    //store all the data
    //change the list
    //graph one
    let root1=document.getElementById("root1");
    let root2=document.getElementById("root2");
    //1,getElementById
    let list_SU=document.getElementById("StateUnrestricted");
    let list_IandAC=document.getElementById("InstructionAndAcademicSupport");
    let list_TUI=document.getElementById("Tuition");
    let list_RES=document.getElementById("Research");
    let list_SF=document.getElementById("StudentFees");
    let list_SSandFA=document.getElementById("StudentServiceAndFinancialAid");
    let list_GandC=document.getElementById("GrantandContracts");
    let list_DorIE=document.getElementById("DeprecationOrInterestExpenses");
    let list_SandSA=document.getElementById("SalesandServiceAuxiliary");
    let list_IS=document.getElementById("InstitutionalSupport");
    let list_GEI=document.getElementById("GiftsEndowmentsInterest");
    let list_GEInput=document.getElementById("seventhInput");
    let icon_Seventh=document.getElementById("seventhInfo");
     //1.4 list explain
    let explain_First=document.getElementById("firstRevenueExplain");
    let explain_Second=document.getElementById("secondRevenueExplain");
    let explain_Third=document.getElementById("thirdRevenueExplain");
    let explain_Fourth=document.getElementById("fourthRevenueExplain");
    let explain_Fifth=document.getElementById("fifthRevenueExplain");
    let explain_Sixth=document.getElementById("sixthRevenueExplain");
    let explain_Seventh=document.getElementById("seventhExplain");
    let explain_Eighth=document.getElementById("eighthRevenueExplain");
    //2,add/remove classList
    list_SU.classList.add('hide');
    list_IandAC.classList.remove('hide');
    list_TUI.classList.add('hide');
    list_RES.classList.remove('hide');
    list_SF.classList.add('hide');
    list_SSandFA.classList.remove('hide');
    list_GandC.classList.add('hide');
    list_DorIE.classList.remove('hide');
    list_SandSA.classList.add('hide');
    list_IS.classList.remove('hide');
    list_GEI.classList.add('hide');
    list_GEInput.classList.add('hide');
    icon_Seventh.classList.add('hide');
    //remove all explainations
    if(explain_First.classList=="explain"){
      explain_First.classList.add('hide');
    }
    if(explain_Second.classList=="explain"){
      explain_Second.classList.add('hide');
    }
    if(explain_Third.classList=="explain"){
      explain_Third.classList.add('hide');
    }
    if(explain_Fourth.classList=="explain"){
      explain_Fourth.classList.add('hide');
    }
    if(explain_Fourth.classList=="explain"){
      explain_Fourth.classList.add('hide');
    }
    if(explain_Fifth.classList=="explain"){
      explain_Fifth.classList.add('hide');
    }
    if(explain_Sixth.classList=="explain"){
      explain_Sixth.classList.add('hide');
    }
    if(explain_Seventh.classList=="explain"){
      explain_Seventh.classList.add('hide');
    }
    if(explain_Eighth.classList=="explain"){
      explain_Eighth.classList.add('hide');
    }
    //change the color of progress bar
    text_expenses.classList.remove("whiteTextColor");
    text_expenses.classList.add("blueTextColor");
    shape_line1.classList.remove('greyColor');
    shape_line1.classList.add('blueColor');
    shape_circle2.classList.remove('greyColor');
    shape_circle2.classList.add('blueColor');
    //change the button
    btn_next.classList.add('hide');
    btn_compare.classList.remove('hide'); 
    btn_previous.classList.remove('hide');
    //store the data
    //remove all datas
    //1,remove the data
    var i;
    for(i=0;i<8;i++){
        if(i==6){
          itemsValue[i]=0;
        }
        if(i==7){
          itemsValue[i]=pieChartData2[i-1].value;
        }
        else{
          itemsValue[i]=pieChartData2[i].value;
        }
    }
    document.getElementById("FirstInputValue").value=pieChartData2[0].value;
    document.getElementById("SecondInputValue").value=pieChartData2[1].value;
    document.getElementById("ThirdInputValue").value=pieChartData2[2].value;
    document.getElementById("FourthInputValue").value=pieChartData2[3].value;
    document.getElementById("FifthInputValue").value=pieChartData2[4].value;
    document.getElementById("SixthInputValue").value=pieChartData2[5].value;
    document.getElementById("seventhInputValue").value=0;
    document.getElementById("eighthInputValue").value=pieChartData2[6].value;
    document.getElementById("totalValue").value=total2;
    //2,remove the chart
    root1.classList.add('hide');
    root2.classList.remove('hide');
    ReactDOM.render(
        <React.StrictMode>
          <App data={pieChartData2} string1="UC Davis Expenditures"/>
        </React.StrictMode>,
        document.getElementById('root2')
      ) 
    
  }
  //stage3
  else if(shape_circle3.classList=="blueColor"){
    //change the button
    btn_next.classList.add('hide');
    btn_restart.classList.remove('hide');
    //change the graph
    let root3=document.getElementById("root3");
    let root4=document.getElementById("root4");
    let root5=document.getElementById("root5");
    let root6=document.getElementById("root6");
    root3.classList.add('hide');
    root4.classList.add('hide');
    root5.classList.remove('hide');
    root6.classList.remove('hide');
     ReactDOM.render(
        <React.StrictMode>
          <App data={pieChartData2} string1="Your Expenses Guess"/>
        </React.StrictMode>,
        document.getElementById('root5')
      ) 
      ReactDOM.render(
        <React.StrictMode>
          <App data={pieChartData2_standard} string1="Actual Expenses"/>
        </React.StrictMode>,
        document.getElementById('root6')
      ) 
  }
}

function compareFunction(){
    let shape_line2=document.getElementById("line2");
    let shape_circle3=document.getElementById("circle3");
    let text_compare=document.getElementById("comparePB");
    let root2=document.getElementById("root2");
    let root3=document.getElementById("root3");
    let root4=document.getElementById("root4");
    //change the color
    text_compare.classList.remove('whiteTextColor');
    text_compare.classList.add('blueTextColor');
    shape_line2.classList.remove('greyColor');
    shape_line2.classList.add('blueColor');
    shape_circle3.classList.remove('greyColor');
    shape_circle3.classList.add('blueColor');

    //remove the list
    //1,getElementById
    //1.1 list
    let list_Function=document.getElementById("function");
    let list_Percentage=document.getElementById("percentage");
    let list_MC=document.getElementById("MedicalCare");
    let list_IandAC=document.getElementById("InstructionAndAcademicSupport");
    let list_RES=document.getElementById("Research");
    let list_SSandFA=document.getElementById("StudentServiceAndFinancialAid");
    let list_DorIE=document.getElementById("DeprecationOrInterestExpenses");
    let list_IS=document.getElementById("InstitutionalSupport");
    let list_Other=document.getElementById("OtherList");
    //1.2 input
    let list_MC_Input=document.getElementById("FirstInput");
    let list_IandAC_Input=document.getElementById("SecondInput");
    let list_RES_Input=document.getElementById("ThirdInput");
    let list_SSandFA_Input=document.getElementById("FourthInput");
    let list_DorIE_Input=document.getElementById("FifthInput");
    let list_IS_Input=document.getElementById("SixthInput");
    let list_Other_Input=document.getElementById("eighthInput");
    let list_Total=document.getElementById("totalShow");
    let list_Total_Input=document.getElementById("totalInput");
    //1.3 icon
    let icon_first=document.getElementById("firstInfo");
    let icon_second=document.getElementById("secondInfo");
    let icon_third=document.getElementById("thirdInfo");
    let icon_fourth=document.getElementById("fourthInfo");
    let icon_fifth=document.getElementById("fifthInfo");
    let icon_sixth=document.getElementById("sixthInfo");
    //let icon_seventh=document.getElementById("seventhInfo");
    let icon_eighth=document.getElementById("eighthInfo");
    //1.4 list explain
    let explain_First=document.getElementById("firstExpenditureExplain");
    let explain_Second=document.getElementById("secondExpenditureExplain");
    let explain_Third=document.getElementById("thirdExpenditureExplain");
    let explain_Fourth=document.getElementById("fourthExpenditureExplain");
    let explain_Fifth=document.getElementById("fifthExpenditureExplain");
    let explain_Sixth=document.getElementById("sixthExpenditureExplain");
    //let explain_Seventh=document.getElementById("seventhExplain");
    let explain_Eighth=document.getElementById("eighthExpenditureExplain");
    //2,classList remove/add
    list_Function.classList.add('hide');
    list_Percentage.classList.add('hide');
    list_MC.classList.add('hide');
    list_IandAC.classList.add('hide');
    list_RES.classList.add('hide');
    list_SSandFA.classList.add('hide');
    list_DorIE.classList.add('hide');
    list_IS.classList.add('hide');
    list_Other.classList.add('hide');
    list_MC_Input.classList.add('hide');
    list_IandAC_Input.classList.add('hide');
    list_RES_Input.classList.add('hide');
    list_SSandFA_Input.classList.add('hide');
    list_DorIE_Input.classList.add('hide');
    list_IS_Input.classList.add('hide');
    list_Other_Input.classList.add('hide');
    list_Total.classList.add('hide');
    list_Total_Input.classList.add('hide');
    //3,remove all the icons
    icon_first.classList.add('hide');
    icon_second.classList.add('hide');
    icon_third.classList.add('hide');
    icon_fourth.classList.add('hide');
    icon_fifth.classList.add('hide');
    icon_sixth.classList.add('hide');
    //icon_seventh.classList.add('hide');
    icon_eighth.classList.add('hide');
    //4,remove all the explaination
    if(explain_First.classList=="explain"){
      explain_First.classList.add('hide');
    }
    if(explain_Second.classList=="explain"){
      explain_Second.classList.add('hide');
    }
    if(explain_Third.classList=="explain"){
      explain_Third.classList.add('hide');
    }
    if(explain_Fourth.classList=="explain"){
      explain_Fourth.classList.add('hide');
    }
    if(explain_Fourth.classList=="explain"){
      explain_Fourth.classList.add('hide');
    }
    if(explain_Fifth.classList=="explain"){
      explain_Fifth.classList.add('hide');
    }
    if(explain_Sixth.classList=="explain"){
      explain_Sixth.classList.add('hide');
    }
    if(explain_Eighth.classList=="explain"){
      explain_Eighth.classList.add('hide');
    }
    //hide and add button
    btn_previous.classList.add('hide');
    btn_compare.classList.add('hide');
    btn_next.classList.remove('hide');
    //hide and add graph
    root2.classList.add('hide');
    root3.classList.remove('hide');
    root4.classList.remove('hide');
    ReactDOM.render(
        <React.StrictMode>
          <App data={pieChartData1} string1="Your Revenue Guess"/>
        </React.StrictMode>,
        document.getElementById('root3')
      ) 
    ReactDOM.render(
        <React.StrictMode>
          <App data={pieChartData1_standard} string1="Actual Revenue"/>
        </React.StrictMode>,
        document.getElementById('root4')
      ) 
}

function previousFunction(){
    let shape_line1=document.getElementById("line1");
    let shape_circle2=document.getElementById("circle2");
    let text_expenses=document.getElementById("expensesPB");
    //1, getElementById
    let list_SU=document.getElementById("StateUnrestricted");
    let list_IandAC=document.getElementById("InstructionAndAcademicSupport");
    let list_TUI=document.getElementById("Tuition");
    let list_RES=document.getElementById("Research");
    let list_SF=document.getElementById("StudentFees");
    let list_SSandFA=document.getElementById("StudentServiceAndFinancialAid");
    let list_GandC=document.getElementById("GrantandContracts");
    let list_DorIE=document.getElementById("DeprecationOrInterestExpenses");
    let list_SandSA=document.getElementById("SalesandServiceAuxiliary");
    let list_IS=document.getElementById("InstitutionalSupport");
    let list_GEI=document.getElementById("GiftsEndowmentsInterest");
    let list_GEInput=document.getElementById("seventhInput");
    let icon_Seventh=document.getElementById("seventhInfo");
    //1.4 list explain
    let explain_First=document.getElementById("firstExpenditureExplain");
    let explain_Second=document.getElementById("secondExpenditureExplain");
    let explain_Third=document.getElementById("thirdExpenditureExplain");
    let explain_Fourth=document.getElementById("fourthExpenditureExplain");
    let explain_Fifth=document.getElementById("fifthExpenditureExplain");
    let explain_Sixth=document.getElementById("sixthExpenditureExplain");
    //let explain_Seventh=document.getElementById("seventhExplain");
    let explain_Eighth=document.getElementById("eighthExpenditureExplain");
    //2,change the color
    shape_circle2.classList.remove('blueColor');
    shape_circle2.classList.add('greyColor');
    shape_line1.classList.remove('blueColor');
    shape_line1.classList.add('greyColor');
    text_expenses.classList.remove('blueTextColor');
    text_expenses.classList.add('whiteTextColor');
    //3, change the number
    document.getElementById("FirstInputValue").value=pieChartData1[0].value;
    document.getElementById("SecondInputValue").value=pieChartData1[1].value;
    document.getElementById("ThirdInputValue").value=pieChartData1[2].value;
    document.getElementById("FourthInputValue").value=pieChartData1[3].value;
    document.getElementById("FifthInputValue").value=pieChartData1[4].value;
    document.getElementById("SixthInputValue").value=pieChartData1[5].value;
    document.getElementById("seventhInputValue").value=pieChartData1[6].value;
    document.getElementById("eighthInputValue").value=pieChartData1[7].value;
    document.getElementById("totalValue").value=total1;
    var i;
    for(i=0;i<8;i++){
      itemsValue[i]=pieChartData1[i].value;
    }
    //4,change the graph
    let root1=document.getElementById("root1");
    let root2=document.getElementById("root2");
    root2.classList.add("hide");
    root1.classList.remove("hide");
    //5,change the list
    list_SU.classList.remove('hide');
    list_IandAC.classList.add('hide');
    list_TUI.classList.remove('hide');
    list_RES.classList.add('hide');
    list_SF.classList.remove('hide');
    list_SSandFA.classList.add('hide');
    list_GandC.classList.remove('hide');
    list_DorIE.classList.add('hide');
    list_SandSA.classList.remove('hide');
    list_IS.classList.add('hide');
    list_GEI.classList.remove('hide');
    list_GEInput.classList.remove('hide');
    icon_Seventh.classList.remove('hide');
    //remove all the explaination
    if(explain_First.classList=="explain"){
      explain_First.classList.add('hide');
    }
    if(explain_Second.classList=="explain"){
      explain_Second.classList.add('hide');
    }
    if(explain_Third.classList=="explain"){
      explain_Third.classList.add('hide');
    }
    if(explain_Fourth.classList=="explain"){
      explain_Fourth.classList.add('hide');
    }
    if(explain_Fourth.classList=="explain"){
      explain_Fourth.classList.add('hide');
    }
    if(explain_Fifth.classList=="explain"){
      explain_Fifth.classList.add('hide');
    }
    if(explain_Sixth.classList=="explain"){
      explain_Sixth.classList.add('hide');
    }
    if(explain_Eighth.classList=="explain"){
      explain_Eighth.classList.add('hide');
    }
    //6,change the button
    btn_previous.classList.add("hide");
    btn_compare.classList.add("hide");
    btn_next.classList.remove("hide");
}

function restartFunction(){
  //make all values to zero
  //1, json in the main.jsx
  //2, inputvalues
  document.getElementById("FirstInputValue").value=0;
  document.getElementById("SecondInputValue").value=0;
  document.getElementById("ThirdInputValue").value=0;
  document.getElementById("FourthInputValue").value=0;
  document.getElementById("FifthInputValue").value=0;
  document.getElementById("SixthInputValue").value=0;
  document.getElementById("seventhInputValue").value=0;
  document.getElementById("eighthInputValue").value=0;
  document.getElementById("totalValue").value=0;
  var i;
  for(i=0;i<8;i++){
    itemsValue[i]=0;
    pieChartData1[i].value=0;
    if(i<7){
      pieChartData2[i].value=0;
    }
  }
  total1=0;
  total2=0;
  //change the color of the progress bar
  let shape_line1=document.getElementById("line1");
  let shape_line2=document.getElementById("line2");
  //let shape_circle1=document.getElementById("circle1");
  let shape_circle2=document.getElementById("circle2");
  let shape_circle3=document.getElementById("circle3");
  let text_expenses=document.getElementById("expensesPB");
  let text_compare=document.getElementById("comparePB");
  //shape_circle1.classList.remove("blueColor");
  //shape_circle1.classList.add("greyColor");
  shape_circle2.classList.remove("blueColor");
  shape_circle2.classList.add("greyColor");
  shape_circle3.classList.remove("blueColor");
  shape_circle3.classList.add("greyColor");
  shape_line1.classList.remove("blueColor");
  shape_line1.classList.add("greyColor");
  shape_line2.classList.remove("blueColor");
  shape_line2.classList.add("greyColor");
  text_expenses.classList.remove("blueTextColor");
  text_expenses.classList.add("whiteTextColor");
  text_compare.classList.remove("blueTextColor");
  text_compare.classList.add("whiteTextColor");
  //change the graph
  //change the list
  //1, getElementById
  //1.1 list 
  let list_Function=document.getElementById("function");
  let list_Percentage=document.getElementById("percentage");
  let list_MC=document.getElementById("MedicalCare");
  let list_SU=document.getElementById("StateUnrestricted");
  let list_TUI=document.getElementById("Tuition");
  let list_SF=document.getElementById("StudentFees");
  let list_GandC=document.getElementById("GrantandContracts");
  let list_SandSA=document.getElementById("SalesandServiceAuxiliary");
  let list_GEI=document.getElementById("GiftsEndowmentsInterest");
  let list_Other=document.getElementById("OtherList");
  //1.2 list input
  let list_MC_Input=document.getElementById("FirstInput");
  let list_SU_Input=document.getElementById("SecondInput");
  let list_TUI_Input=document.getElementById("ThirdInput");
  let list_SF_Input=document.getElementById("FourthInput");
  let list_GandC_Input=document.getElementById("FifthInput");
  let list_SandSA_Input=document.getElementById("SixthInput");
  let list_GEI_Input=document.getElementById("seventhInput");
  let list_Other_Input=document.getElementById("eighthInput");
  let list_Total=document.getElementById("totalShow");
  let list_Total_Input=document.getElementById("totalInput");
  //1.3 list icon
  let icon_first=document.getElementById("firstInfo");
  let icon_second=document.getElementById("secondInfo");
  let icon_third=document.getElementById("thirdInfo");
  let icon_fourth=document.getElementById("fourthInfo");
  let icon_fifth=document.getElementById("fifthInfo");
  let icon_sixth=document.getElementById("sixthInfo");
  let icon_seventh=document.getElementById("seventhInfo");
  let icon_eighth=document.getElementById("eighthInfo");
 
  //2,remove hides
  list_Function.classList.remove("hide");
  list_Percentage.classList.remove("hide");
  list_MC.classList.remove("hide");
  list_SU.classList.remove("hide");
  list_TUI.classList.remove("hide");
  list_SF.classList.remove("hide");
  list_GandC.classList.remove("hide");
  list_SandSA.classList.remove("hide");
  list_GEI.classList.remove("hide");
  list_Other.classList.remove("hide");
  list_MC_Input.classList.remove("hide");
  list_SU_Input.classList.remove("hide");
  list_TUI_Input.classList.remove("hide");
  list_SF_Input.classList.remove("hide");
  list_GandC_Input.classList.remove("hide");
  list_SandSA_Input.classList.remove("hide");
  list_GEI_Input.classList.remove("hide");
  list_Other_Input.classList.remove("hide");
  list_Total.classList.remove("hide");
  list_Total_Input.classList.remove("hide");
  icon_first.classList.remove('hide');
  icon_second.classList.remove('hide');
  icon_third.classList.remove('hide');
  icon_fourth.classList.remove('hide');
  icon_fifth.classList.remove('hide');
  icon_sixth.classList.remove('hide');
  icon_seventh.classList.remove('hide');
  icon_eighth.classList.remove('hide');
  //change the button
  btn_restart.classList.add("hide");
  btn_next.classList.remove("hide");
  //change the graph
  let root1=document.getElementById("root1");
  let root2=document.getElementById("root2");
  let root3=document.getElementById("root3");
  let root4=document.getElementById("root4");
  let root5=document.getElementById("root5");
  let root6=document.getElementById("root6");
 
  root5.classList.add('hide');
  root6.classList.add('hide');
  root1.classList.remove('hide');
   ReactDOM.render(
        <React.StrictMode>
          <App data={resetChartData1} string1="UC Davis Revenues"/>
        </React.StrictMode>,
        document.getElementById('root1')
      )
      ReactDOM.render(
        <React.StrictMode>
          <App data={resetChartData2} string1="UC Davis Expenditures"/>
        </React.StrictMode>,
        document.getElementById('root2')
      )
      ReactDOM.render(
        <React.StrictMode>
          <App data={resetChartData1} string1="UC Davis Revenues"/>
        </React.StrictMode>,
        document.getElementById('root3')
      )
      ReactDOM.render(
        <React.StrictMode>
          <App data={resetChartData1} string1="UC Davis Revenues"/>
        </React.StrictMode>,
        document.getElementById('root4')
      )
      ReactDOM.render(
        <React.StrictMode>
          <App data={resetChartData2} string1="UC Davis Expenditures"/>
        </React.StrictMode>,
        document.getElementById('root5')
      )
      ReactDOM.render(
        <React.StrictMode>
          <App data={resetChartData2} string1="UC Davis Expenditures"/>
        </React.StrictMode>,
        document.getElementById('root6')
      )
}

function updateFirstInfo(){
  let shape_circle2=document.getElementById("circle2");
  if(shape_circle2.classList=="greyColor"){
    let explain_First=document.getElementById("firstRevenueExplain");
    if(explain_First.classList=="explain"){
      explain_First.classList.add('hide');
    }
    else{
      explain_First.classList.remove('hide');
    }
  }
  else{
    let explain_First=document.getElementById("firstExpenditureExplain");
    if(explain_First.classList=="explain"){
      explain_First.classList.add('hide');
    }
    else{
      explain_First.classList.remove('hide');
    }
  }
}

function updateSecondInfo(){
  let shape_circle2=document.getElementById("circle2");
  if(shape_circle2.classList=="greyColor"){
    let explain_Second=document.getElementById("secondRevenueExplain");
    if(explain_Second.classList=="explain"){
      explain_Second.classList.add('hide');
    }
    else{
      explain_Second.classList.remove('hide');
    }
  }
  else{
    let explain_Second=document.getElementById("secondExpenditureExplain");
    if(explain_Second.classList=="explain"){
      explain_Second.classList.add('hide');
    }
    else{
      explain_Second.classList.remove('hide');
    }
  }
}

function updateThirdInfo(){
  let shape_circle2=document.getElementById("circle2");
  if(shape_circle2.classList=="greyColor"){
    let explain_Third=document.getElementById("thirdRevenueExplain");
    if(explain_Third.classList=="explain"){
      explain_Third.classList.add('hide');
    }
    else{
      explain_Third.classList.remove('hide');
    }
  }
  else{
    let explain_Third=document.getElementById("thirdExpenditureExplain");
    if(explain_Third.classList=="explain"){
      explain_Third.classList.add('hide');
    }
    else{
      explain_Third.classList.remove('hide');
    }
  }
}

function updateFourthInfo(){
  let shape_circle2=document.getElementById("circle2");
  if(shape_circle2.classList=="greyColor"){
    let explain_Fourth=document.getElementById("fourthRevenueExplain");
    if(explain_Fourth.classList=="explain"){
      explain_Fourth.classList.add('hide');
    }
    else{
      explain_Fourth.classList.remove('hide');
    }
  }
  else{
    let explain_Fourth=document.getElementById("fourthExpenditureExplain");
    if(explain_Fourth.classList=="explain"){
      explain_Fourth.classList.add('hide');
    }
    else{
      explain_Fourth.classList.remove('hide');
    }
  }
}

function updateFifthInfo(){
  let shape_circle2=document.getElementById("circle2");
  if(shape_circle2.classList=="greyColor"){
    let explain_Fifth=document.getElementById("fifthRevenueExplain");
    if(explain_Fifth.classList=="explain"){
      explain_Fifth.classList.add('hide');
    }
    else{
      explain_Fifth.classList.remove('hide');
    }
  }
  else{
    let explain_Fifth=document.getElementById("fifthExpenditureExplain");
    if(explain_Fifth.classList=="explain"){
      explain_Fifth.classList.add('hide');
    }
    else{
      explain_Fifth.classList.remove('hide');
    }
  }
}

function updateSixthInfo(){
  let shape_circle2=document.getElementById("circle2");
  if(shape_circle2.classList=="greyColor"){
    let explain_Sixth=document.getElementById("sixthRevenueExplain");
    if(explain_Sixth.classList=="explain"){
      explain_Sixth.classList.add('hide');
    }
    else{
      explain_Sixth.classList.remove('hide');
    }
  }
  else{
    let explain_Sixth=document.getElementById("sixthExpenditureExplain");
    if(explain_Sixth.classList=="explain"){
      explain_Sixth.classList.add('hide');
    }
    else{
      explain_Sixth.classList.remove('hide');
    }
  }
}

function updateSeventhInfo(){
 
    let explain_Seventh=document.getElementById("seventhExplain");
    if(explain_Seventh.classList=="explain"){
      explain_Seventh.classList.add('hide');
    }
    else{
      explain_Seventh.classList.remove('hide');
    }
  
}

function updateEighthInfo(){
  let shape_circle2=document.getElementById("circle2");
  if(shape_circle2.classList=="greyColor"){
    let explain_Eighth=document.getElementById("eighthRevenueExplain");
    if(explain_Eighth.classList=="explain"){
      explain_Eighth.classList.add('hide');
    }
    else{
      explain_Eighth.classList.remove('hide');
    }
  }
  else{
    let explain_Eighth=document.getElementById("eighthExpenditureExplain");
    if(explain_Eighth.classList=="explain"){
      explain_Eighth.classList.add('hide');
    }
    else{
      explain_Eighth.classList.remove('hide');
    }
  }
}
