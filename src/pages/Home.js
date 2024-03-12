import React from 'react';
import Button from "../ui/button/Button";
import SvgButton from "../ui/button/SvgButton";

const Home = () => {
  return (
    <div className="Home">
      <Button color={'red'} text={'등록'}/>
        <Button color={'green'} text={'수정'}/>
        <Button text={'수정'} type={'submit'}/>
      <SvgButton/>
    </div>
  );
}

export default Home;