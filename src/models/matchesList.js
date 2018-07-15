export function getMatchesList(date) {
  return fetch('http://php-0x2f0713.herokuapp.com/chatfuel_api/football/score/?date=' + date)
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    });
}

export const matchesList = {
  WC2018: [
    // {
    //   date: `20180614`,
    //   matches: [
    //     {
    //       team1: `Brazil`,
    //       team2: `Belgium`,
    //       time: `1:00`,
    //       score1: `1`,
    //       score2: `2`,
    //       image1: `brazil`,
    //       image2: `belgium`,
    //     },
    //     {
    //       team1: `Sweden`,
    //       team2: `England`,
    //       time: `21:00`,
    //       score1: `0`,
    //       score2: `2`,
    //       image1: `sweden`,
    //       image2: `england`,
    //     }
    //   ],
    // },
    // {
    //   date: `20180615`,
    //   matches: [
    //     {
    //       team1: `VietNam`,
    //       team2: `Belgium123`,
    //       time: `1:00`,
    //       score1: `1`,
    //       score2: `2`,
    //       image1: `brazil`,
    //       image2: `belgium`,
    //     },
    //     {
    //       team1: `Sweden123`,
    //       team2: `England123`,
    //       time: `21:00`,
    //       score1: `0`,
    //       score2: `2`,
    //       image1: `sweden`,
    //       image2: `england`,
    //     }
    //   ],
    // },
  ]
}

