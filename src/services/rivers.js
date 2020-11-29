const rivers = {
    nilo: {
      id: 1,
      name: 'Nilo',
      continent: 'África',
      length: '6,650 km',
      outflow: 'Mediterráneo'
    },
    amazonas: {
      id: 2,
      name: 'Amazonas',
      continent: 'Sur América',
      length: '6,575 km',
      outflow: 'Océano Atlántico'
    },
    yangtze: {
      id: 3,
      name: 'Yangtze',
      continent: 'Asia',
      length: '6,300 km',
      outflow: 'Mar Este de China'
    },
    mississippi: {
      id: 4,
      name: 'Mississippi',
      continent: 'Norte América',
      length: '6,275 km',
      outflow: 'Golfo de México'
    }
   }

export function getRiverInformation(name) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
            rivers[name]
        )
      }, 1000)
    })
  }