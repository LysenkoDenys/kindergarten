import groupMates from '../../data/groupMates';
import { useTheme } from '../../ThemeContext';
import { TiSocialFacebookCircular } from 'react-icons/ti';

const BlockMemo = ({ element }) => {
  const index = groupMates.findIndex((el) => el.id === element.id);
  const imageView = groupMates[index].image
    ? groupMates[index].image
    : `undefined.jpg`;

  const darkTheme = useTheme();

  const themePhoto = darkTheme
    ? 'h-[50px] hover:scale-105 cursor-pointer items-center border-2 rounded-[50%] border-solid border-gray-700 hover:border-gray-800 ease-in-out duration-300  shadow-[-2px_1px_2px_2px_rgba(255,255,255,0.8)] hover:shadow-[-4px_1px_1px_1px_rgba(255,255,255,1)] '
    : 'h-[50px] hover:scale-105 cursor-pointer items-center border-2 rounded-[50%] border-solid border-gray-400 hover:border-gray-500 ease-in-out duration-300 shadow-[-5px_1px_5px_5px_rgba(0,0,0,0.4)]';

  const themeBlock = darkTheme
    ? 'bg-[#221f1f] rounded-[5px] p-3 mb-4 text-[1em] shadow-[5px_5px_10px_5px_rgba(255,255,255,0.3)] hover:bg-[#333333] hover:shadow-[3px_3px_5px_2px_rgba(255,255,255,0.3)] select-none text-[#CCCCCC]'
    : 'bg-[#dadbde] rounded-[5px] p-3 mb-4 text-[1em] shadow-[5px_5px_10px_5px_rgba(0,0,0,0.3)] hover:bg-[#e7e8e9] hover:shadow-[3px_3px_5px_2px_rgba(0,0,0,0.3)] select-none';

  // refactoring:
  function showStories() {
    const storiesToShow = groupMates.filter(
      (el) => el.story[0].text.length > 0
    );
    const imagesToShow = groupMates.filter((el) => el.story[0].img.length > 0);
    return storiesToShow && imagesToShow ? 'text and image' : 'imageS';
  }
  console.log(showStories()); //;

  // console.log(groupMates[2].story[0].text); //

  return (
    <div id={groupMates[index].id}>
      <div className={themeBlock}>
        {groupMates[index].url ? (
          <a
            href={groupMates[index].url ? groupMates[index].url : '#'}
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex justify-start items-center mb-1">
              <img
                src={require(`../../assets/faces/${imageView}`)}
                alt={`my group mate ${groupMates[index].lastName}`}
                className={themePhoto}
              />
              <div className="mx-1 font-bold">
                {`${groupMates[index].lastName} ${groupMates[index].firstName}`}
              </div>
              <TiSocialFacebookCircular className="hover:scale-110 ease-in-out duration-300 mr-1" />
            </div>
          </a>
        ) : (
          <div className="flex justify-start items-center mb-1">
            <img
              src={require(`../../assets/faces/${imageView}`)}
              alt={`my group mate ${groupMates[index].lastName}`}
              className={themePhoto}
            />
            <div className="mx-1 font-bold">
              {`${groupMates[index].lastName} ${groupMates[index].firstName}`}
            </div>
          </div>
        )}
        <div className="font-bold">Спогади:</div>
        {/*  */}
        <div className="p-1">
          {groupMates[index].story.map((el) => el.text)[0]}
          {/* if there is no img - we do not see an error */}
          {groupMates[index].story[0].img.length > 0 && (
            <div className="flex justify-center items-center">
              <img
                src={require(`../../assets/stories/${
                  groupMates[index].story.map((el) => el.img)[0]
                }`)}
                alt={`${groupMates[index].story.map((el) => el.img)[0]}`}
              />
            </div>
          )}
        </div>
        <div className="p-1">
          {groupMates[index].story.map((el) => el.text)[1]}
          {groupMates[index].story[1].img.length > 0 && (
            <div className="flex justify-center items-center">
              <img
                src={require(`../../assets/stories/${
                  groupMates[index].story.map((el) => el.img)[1]
                }`)}
                alt={`${groupMates[index].story.map((el) => el.img)[1]}`}
              />
            </div>
          )}
        </div>
        <div className="p-1">
          {groupMates[index].story.map((el) => el.text)[2]}
          {groupMates[index].story[2].img.length > 0 && (
            <div className="flex justify-center items-center">
              <img
                src={require(`../../assets/stories/${
                  groupMates[index].story.map((el) => el.img)[2]
                }`)}
                alt={`${groupMates[index].story.map((el) => el.img)[2]}`}
              />
            </div>
          )}
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default BlockMemo;
