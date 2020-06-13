// 1. When a user presses the record button, start recording actions
// 2. When recording, push an object with the important data to the array
//			- Clear the array before starting a new recording
// 3. Stop a recording by pressing the same button
//			- Print all of the position to the console using forEach: 123px 345px
// 4. Replay the recording by iterating through the Array and move a custom cursor to the position that was recorded

// variables/ data
let isRecording = false;
let mouseMoves = [ ];
let previousTime=0;

// dom elements
const $cursor = document.getElementById('cursor')
const $startAndStop = document.getElementById('startAndStop')
const $replayRecording = document.getElementById('replayRecording')




// Each movement of the mouse

window.addEventListener('mousemove', (event) => {
	if (isRecording) {
		
		console.log(event.clientX, event.clientY,event.timeStamp)
		// Record the data to the Arrayx
	  	// this is one of many ways to prevent recording, consider you may also use removeEventListener() as well
		
		if((event.timeStamp-previousTime)>20){
			mouseMoves.push({xValue : event.clientX , yValue : event.clientY})
			previousTime = event.timeStamp;
		}	

	}
})





// Start/stop the recording

$startAndStop.addEventListener('click', (event) => {
	isRecording = !isRecording;
 
	// Clearing the Array. 
	if (isRecording)
	{
		$startAndStop.style.backgroundColor = "red";
		mouseMoves = [];
	}
	console.log(mouseMoves);
	if (!isRecording)
	{
		$startAndStop.style.backgroundColor = "aqua";
		
		// mouseMoves.forEach(move =>
		// 	{
		// 		console.log(`${move.xValue}px ${move.yValue}px`)
		// 	}
		// )
	}
	
})







// Replay recording

let replay = (i)=>{
		if (i<mouseMoves.length)
		{	
			$replayRecording.innerHTML="Recording is being shown";
			setTimeout(() => {
				$cursor.style.setProperty('--x' ,mouseMoves[i].xValue)
				$cursor.style.setProperty('--y' , mouseMoves[i].yValue)
				i++;
				replay(i);
			}, 100);
			
		}	
		else
		{
			$replayRecording.innerHTML=" Replay the Recording ";
		}
}
$replayRecording.addEventListener('click', (event) => {
	replay(0);
	// Set the x and y for each mouse move recorded (123, 456 are examples)
	// $cursor.style.setProperty('--x', 123)
	// $cursor.style.setProperty('--y', 456)
})




