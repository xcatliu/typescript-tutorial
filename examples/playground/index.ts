interface Alarm {
  alert()
}

class Door {
}

class SecurityDoor extends Door implements Alarm {
  alert() {
    console.log('SecurityDoor alart');
  }
}
