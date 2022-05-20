const languages = [
  {
    id: 1,
    text: 'Hausa',
  },
  {
    id: 2,
    text: 'Igbo',
  },
  {
    id: 3,
    text: 'Èdè Yorùbá',
  },
  {
    id: 4,
    text: 'Nigerian Pidgin',
  },
];

const Languages = () => {
  return (
    <>
      {languages.map((language) => (
        <span className='link text-[#1A0DAB] text-sm' key={language.id}>
          {language.text}
        </span>
      ))}
    </>
  );
};

export default Languages;
