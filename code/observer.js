
// 被观察者
class Subject {
  constructor(name) {
    this.name = name
    this.observers = []
    this.state = ''
  }

  attach(observer) {
    this.observers.push(observer)
  }

  setState(newState) {
    this.state = newState
    this.observers.forEach((observer) => observer.update(this.name + newState))
  }
}

// 观察者
class Observer {
  constructor(name) {
    this.name = name
  }
  update(newState) {
    console.log(`${this.name} : ${newState}`)
  }
}

const sub = new Subject('小猫咪')

const o = new Observer('铲屎的')

sub.attach(o)
sub.setState('饿了...')
sub.setState('还想吃小鱼干')