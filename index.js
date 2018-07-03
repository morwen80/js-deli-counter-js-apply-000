var katzDeliLine = [];


function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(now){
  if(now.length === 0) {
    return "There is nobody waiting to be served!"
  } 
  else {
    var name = now[0];
    return "Currently serving " + name + ".";
    now.splice(0,1);
  }
}


function currentLine(l) {
    var line = []
    if (l.length === 0) {
      return "The line is currently empty."
    } 
    else {
      for(var i = 0; i < l.length; i++) {
        line = line + (i + 1) + ". " + l[i] + ", "
      }
      line = line.slice(0, line.length-2)
      return "The line is currently: " + line
    }
}