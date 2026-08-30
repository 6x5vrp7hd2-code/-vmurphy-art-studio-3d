
const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav');
if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});}
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
const form=document.getElementById('art-configurator'),output=document.getElementById('brief-output'),briefText=document.getElementById('brief-text'),briefTitle=document.getElementById('brief-title');
if(form&&output&&briefText){form.addEventListener('submit',e=>{e.preventDefault();const d=Object.fromEntries(new FormData(form).entries());briefTitle.textContent=`${d.mood} ${d.setting} — ${d.format} Studio Edition`;const extra=d.detail?.trim()?` Personal detail: ${d.detail.trim()}.`:'';briefText.textContent=`Create a ${d.format.toLowerCase()} ${d.finish.toLowerCase()} composition set in a ${d.setting.toLowerCase()}, with ${d.architecture.toLowerCase()} architecture in ${d.season.toLowerCase()} during the ${d.time.toLowerCase()}. Use a ${d.palette.toLowerCase()} palette, include ${d.features.toLowerCase()}, and show ${d.people.toLowerCase()}. The overall mood should feel ${d.mood.toLowerCase()}.${extra}`;output.hidden=false;output.scrollIntoView({behavior:'smooth',block:'center'});});}
const copyBtn=document.getElementById('copy-brief');if(copyBtn&&briefText){copyBtn.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(`${briefTitle.textContent}\n\n${briefText.textContent}`);copyBtn.textContent='Copied';setTimeout(()=>copyBtn.textContent='Copy brief',1500)}catch{copyBtn.textContent='Copy manually'}});}


const orderForm = document.getElementById('studio-order-form');
const orderOutput = document.getElementById('order-output');
const orderText = document.getElementById('order-text');
const orderTitle = document.getElementById('order-title');
const orderEmail = document.getElementById('email-order');
if (orderForm && orderOutput && orderText) {
  orderForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(orderForm).entries());
    
    fetch('https://hook.eu1.make.com/tcoy5404c2hoefagh5q3mhxqb75yoay9', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
          },
      body: JSON.stringify(d)
        });
    
    const brief = `V. MURPHY ART STUDIO — STUDIO EDITION ENQUIRY

Customer: ${d.customer}
Email: ${d.email}
Preferred completion date: ${d.deadline || 'Not specified'}
Budget: ${d.budget}

Service: ${d.service}
Edition type: ${d.edition}
Setting: ${d.setting}
Architecture: ${d.architecture}
Season: ${d.season}
Time / light: ${d.time}
Palette: ${d.palette}
People: ${d.people}
Mood: ${d.mood}
Format: ${d.format}
Finish: ${d.finish}
Final product: ${d.product}

Personal details / memories:
${d.details || 'None supplied'}

Reference image:
${d.reference || 'None supplied'}

Please review this enquiry, confirm feasibility, final price and timescale before payment or creative work begins.`;
    orderTitle.textContent = d.service;
    orderText.textContent = brief;
    orderOutput.hidden = false;
    const subject = encodeURIComponent('V. Murphy Studio Edition enquiry');
    const body = encodeURIComponent(brief);
    if (orderEmail) orderEmail.href = `mailto:YOUR-EMAIL@example.com?subject=${subject}&body=${body}`;
    orderOutput.scrollIntoView({behavior:'smooth', block:'center'});
  });
}
const copyOrder = document.getElementById('copy-order');
if (copyOrder && orderText) {
  copyOrder.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(orderText.textContent);
      copyOrder.textContent = 'Copied';
      setTimeout(() => copyOrder.textContent = 'Copy enquiry', 1600);
    } catch {
      copyOrder.textContent = 'Select and copy manually';
    }
  });
}
