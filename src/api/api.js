const URL = 'https://fs.mh.net.ua/ajax/lsjson.php?dir=global/video&idu=1';

// <----- I use a delay to display the downloaded data smoothly -----> \\

const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

const request = async() => {
  await delay();
  const result = await fetch(URL);

  return result.json();
};

export const getDataFromServer = () => request();
