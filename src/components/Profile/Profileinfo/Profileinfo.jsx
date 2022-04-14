import Preloader from "../../common/preloader/Preloader";
import s from "./Profileinfo.module.css";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div>
        <img
          src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
          alt="phot"
        />
      </div>
      <div className={s.DescriptionBlock}>
        <img src={props.profile.photos.large} alt="" />
        My ava + description
      </div>
    </div>
  );
};
export default ProfileInfo;
