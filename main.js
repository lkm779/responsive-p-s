

/*
const countdown = document.querySelector('.countdown');

// Set Launch Date (ms)
const launchDate = new Date('April 1, 2022 13:00:00').getTime();

// Update every second
const intvl = setInterval(() => {
  // Get todays date and time (ms)
  const now = new Date().getTime();

  // Distance from now and the launch date (ms)
  const distance = launchDate - now;

  // Time calculation
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display result
  countdown.innerHTML = `
  <div>${days}<span></span></div> 
  <div>${hours}<span></span></div>
  <div>${mins}<span></span></div>
  <div>${seconds}<span></span></div>
  `;

  // If launch date is reached
  if (distance < 0) {
    // Stop countdown
    clearInterval(intvl);
    // Style and output text
    countdown.style.color = '#000000';
    countdown.innerHTML = 'Launched!';
  }
}, 1000);


html---------------------------
 <div class="countdown">                                     
                    <div class="count">
                    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
                    <script type="">
                    $(document).ready(function(){
                    var count=0;
                    var counter = setInterval(function(){
                    if (count<101){
                      .$('.count').text(count + '%');
                      count++
                    }
                    else{
                      clearInterval(counter)
                    }
                    }, 10)
                    })
                    </script>
                    </div>
                    </div>


css-----------------------------------

.countdown{
    background: rgb(226, 252, 255);
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center; 
    margin-bottom: 1rem;

}

.countdown div{
    font-size: 10vw;
    font-family: 'MERCUTIO NBP', gotham;
    -webkit-text-stroke: 0.3vw rgb(82,73,42,1);  width and color 
    padding: 3%;
  border-radius: 5px;
  background:rgb(226, 252, 255);
  color:  rgb(255, 255, 255)
}

*/




(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "04/06/",
      birthday = dayMonth + yyyy;
  
  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end
  
  const countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    

        const now = new Date().getTime(),
              distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
          document.getElementById("headline").innerText = "PARTY TIME!";
          document.getElementById("countdown").style.display = "none";
          document.getElementById("content").style.display = "block";
          clearInterval(x);
        }
        //seconds
      }, 0)
  }());