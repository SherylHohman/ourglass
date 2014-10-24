# OurGlass [![Build Status](https://travis-ci.org/unexpected-lion/ourglass.svg?branch=master)](https://travis-ci.org/unexpected-lion/ourglass)

Ourglass is a fun team-building game where users work together to prevent sand from spilling all over the place! Users collaboratively race against the clock while working together to direct the flow of sand towards a target.

## Team

  - __Product Owner__: Spencer Handley [github](https://github.com/spencer48)
  - __Scrum Master__: John Heroy [github](https://github.com/johnheroy)
  - __Development Team Members__: Nick Stefan [github](https://github.com/nickstefan), Katherine Gilhooley [github](https://github.com/bisutun), Aric Huang [github](https://github.com/concreted)

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Team](#team)
1. [Contributing](#contributing)

## Usage
1. Clone the repo `git clone https://github.com/unexpected-lion/ourglass.git`
1. `npm install -g bower`
1. `bower install`
1. `npm install`
1. `npm install -g gulp`
1. `gulp`
1. Shake ya' bad self. 

## Requirements

- Node 0.10.x
- Coquette
- Firebase
- Mocha (testing)


## Development

### Installing Dependencies

From within the root directory:

```sh
sudo npm install -g bower
npm install
bower install
```

## Class API

### SimpleGame

### Room

### Player
Defined as taking arguments: game(instance), settings(an object), however, with coquette, best instantiated from within the game class itself or another class that has been instantiated within the game class by invoking:
`this.c.entities.create(Player,{optionsObj})`
options:
  size = {x: _width_, y: _height_}
  color = _string_
  angle = _integer_
  
options can also be hardcoded to the player class by defining `this.size` etc.

#### Player#collision(other):
function invoked upon collision, and passes the object being collided as `other`

### DisplayName

### OtherPlayer

### Particle

### GameScore

### Spout

### GoalBucket

### Roadmap

[![Stories in Ready](https://badge.waffle.io/unexpected-lion/ourglass.svg?label=ready&title=Ready)](http://waffle.io/unexpected-lion/ourglass)

View the project roadmap [here](https://github.com/unexpected-lion/ourglass/issues)


## Contributing

See [CONTRIBUTING.md](https://github.com/unexpected-lion/ourglass/blob/master/contributing.md) for contribution guidelines.
