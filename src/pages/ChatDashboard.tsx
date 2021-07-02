import { Row, Col, Button, Container, Form } from "react-bootstrap";
import "./ChatDashboard.scss";
import { uniqueId } from "lodash";

import {
  Home,
  Chat,
  ContactPhone,
  Notifications,
  CalendarViewDaySharp,
  Settings,
  LocalDining,
  Add,
  ExpandMore,
  Search,
  MoreVert,
  MoreHoriz,
  Done,
  Visibility,
  SentimentSatisfiedAlt,
  Description,
  PhotoAlbum,
  Camera,
} from "@material-ui/icons";

import { AttachFile, Send, Contacts } from "@material-ui/icons";
import { useState } from "react";

const urlRounded =
  "https://res.cloudinary.com/djcffe77b/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35";

const messagesObject = [
  {
    name: "Sangharsh",
    message: "Hello",
    timestamp: 1,
    read: true,
    id: uniqueId(),
  },
  {
    name: "Guru",
    message: "Hi",
    timestamp: 2,
    read: true,
    id: uniqueId(),
  },
  {
    name: "Sangharsh",
    message:
      "When will are you sending me files?When will are you sending me files?When will are you sending me files?When will are you sending me files?When will are you sending me files?When will are you sending me files?When will are you sending me files?When will are you sending me files?When will are you sending me files?When will are you sending me files?",
    timestamp: 3,
    read: true,
    id: uniqueId(),
  },
  {
    name: "Guru",
    message: "Just working on it..",
    timestamp: 4,
    read: true,
    id: uniqueId(),
  },
  {
    name: "Sangharsh",
    message: "how much time it will take?",
    timestamp: 5,
    read: true,
    id: uniqueId(),
  },
  {
    name: "Guru",
    message: "maximum 1 hr.",
    timestamp: 6,
    read: false,
    id: uniqueId(),
  },
  {
    name: "Guru",
    message: "Just working on it..",
    timestamp: 4,
    read: true,
    id: uniqueId(),
  },
  {
    name: "Sangharsh",
    message: "how much time it will take?",
    timestamp: 5,
    read: true,
    id: uniqueId(),
  },
  {
    name: "Guru",
    message: "maximum 1 hr.",
    timestamp: 6,
    read: false,
    id: uniqueId(),
  },
  {
    name: "Guru",
    message: "Just working on it..",
    timestamp: 4,
    read: true,
    id: uniqueId(),
  },
  {
    name: "Sangharsh",
    message: "how much time it will take?",
    timestamp: 5,
    read: true,
    id: uniqueId(),
  },
  {
    name: "Guru",
    message: "maximum 1 hr.",
    timestamp: 6,
    read: false,
    id: uniqueId(),
  },
  {
    name: "Guru",
    message: "Just working on it..",
    timestamp: 4,
    read: true,
    id: uniqueId(),
  },
  {
    name: "Sangharsh",
    message: "how much time it will take?",
    timestamp: 5,
    read: true,
    id: uniqueId(),
  },
  {
    name: "Guru",
    message: "maximum 1 hr.",
    timestamp: 6,
    read: false,
    id: uniqueId(),
  },
];
interface MessageInterface {
  name: string;
  message: string;
  timestamp: number;
  read: boolean;
  id: string;
}

const currentUserName = "Guru";
const chats = [
  {
    name: "Sangharsh",
    avatar: urlRounded + "/v1624861318/user-database/5_wa9q8m.jpg",
    message: "Hello, How are you?",
    lastOnline: "last online 7 hr ago",
    msgTime: "8 hr ago",
    id: uniqueId(),
  },
  {
    name: "Shubham K",
    avatar: urlRounded + "/v1624861317/user-database/4_dm9bzd.jpg",
    message: "When will you send me files?",
    lastOnline: "last online 1 min ago",
    msgTime: "2 min ago",
    id: uniqueId(),
  },
  {
    name: "Harshal T",
    avatar: urlRounded + "/v1624861317/user-database/3_hnc3tm.jpg",
    message: "How many time will it take to make changes base branch?",
    lastOnline: "last online 10 hr ago",
    msgTime: "11 hr ago",
    id: uniqueId(),
  },
  {
    name: "Priyanak H",
    avatar: urlRounded + "/v1624861316/user-database/2_wtmv2y.jpg",
    message: "What is confing file in master?",
    lastOnline: "last online 10 day ago",
    msgTime: "11 day ago",
    id: uniqueId(),
  },
  {
    name: "Vicky M",
    avatar: urlRounded + "/v1624861316/user-database/1_qgywsk.jpg",
    message: "Are you on sick leave?",
    lastOnline: "last online 2 hr ago",
    msgTime: "2 hr ago",
    id: uniqueId(),
  },
  {
    name: "Manisha",
    avatar: urlRounded + "/v1623929527/user-database/avatar-1577909_wweb8h.svg",
    message: "Help me with problem.",
    lastOnline: "last online 5 hr ago",
    msgTime: "6 hr ago",
    id: uniqueId(),
  },
  {
    name: "Vicky MK",
    avatar: urlRounded + "/v1624861316/user-database/1_qgywsk.jpg",
    message: "Are you on sick leave?",
    lastOnline: "last online 2 hr ago",
    msgTime: "2 hr ago",
    id: uniqueId(),
  },
  {
    name: "Manisha K",
    avatar: urlRounded + "/v1623929527/user-database/avatar-1577909_wweb8h.svg",
    message: "Help me with problem.",
    lastOnline: "last online 5 hr ago",
    msgTime: "6 hr ago",
    id: uniqueId(),
  },
];
const menu = [
  {
    title: "Home",
    icon: Home,
    id: uniqueId(),
  },
  {
    title: "Chat",
    icon: Chat,
    id: uniqueId(),
  },
  {
    title: "Contact",
    icon: ContactPhone,
    id: uniqueId(),
  },
  {
    title: "Notification",
    icon: Notifications,
    id: uniqueId(),
  },
  {
    title: "Calender",
    icon: CalendarViewDaySharp,
    id: uniqueId(),
  },
  {
    title: "Settings",
    icon: Settings,
    id: uniqueId(),
  },
  {
    title: "Log out",
    icon: LocalDining,
    id: uniqueId(),
  },
];

function SideMenu() {
  return (
    <>
      {menu.map((obj) => {
        return (
          <div key={obj.id} className="d-flex ml-2">
            <obj.icon />
            <a href="#home" className="pb-4 mx-3">
              {obj.title}
            </a>
          </div>
        );
      })}
    </>
  );
}

function ChatTiles() {
  return (
    <div className="overflow-auto mt-4">
      {chats.map((element) => {
        return (
          <div key={element.id} className="chat-container m-4  rounded-lg">
            <div className="p-4">
              <div className="d-flex">
                <div>
                  <img
                    className="rounded-circle chat-profile-img"
                    src={element.avatar}
                    alt="Profile"
                  />
                </div>
                <div className="d-flex flex-column flex-fill pl-3">
                  <strong>{element.name}</strong>
                  <span className="last-online">{element.lastOnline}</span>
                </div>
                <span className="msg-time">{element.msgTime}</span>
              </div>
              <div className="chat-message-in-short pt-2">
                {element.message}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function LeftMessage(params: MessageInterface) {
  console.log(params.id);

  return (
    <div className="d-flex align-items-baseline pt-4">
      <img
        className="rounded-circle single-chat-profile-img"
        src={urlRounded + "/v1624861316/user-database/1_qgywsk.jpg"}
        alt=""
      />
      <span className="ml-3 p-2  other-user-msg">{params.message}</span>
      <span>
        <MoreHoriz />
      </span>
    </div>
  );
}

function RightMessage(params: MessageInterface) {
  console.log(params.id);

  return (
    <div className="d-flex flex-row-reverse align-items-center pt-4">
      {params.read ? <Done /> : <Visibility />}
      <span className="border current-user-msg p-2 mx-2">{params.message}</span>
      <span className="pl-3">
        <MoreHoriz />
      </span>
    </div>
  );
}
//ContactPhone,Description,PhotoAlbum,Camera
// interface AttachementInterface {

// }
function HoverAttachementIcons() {
  const style = {
    opacity: 1,
    transform: "translateY(0%) scaleX(1) scaleY(1)",
  };
  const iconsClasses =
    "add-hidden-icons mb-2 align-items-center d-flex justify-content-center rounded-circle";
  return (
    <div className="add-more-hover-container">
      <div className={iconsClasses}>
        <Camera className="icon" style={style} />
      </div>
      <div className={iconsClasses}>
        <PhotoAlbum />
      </div>
      <div className={iconsClasses}>
        <Description />
      </div>
      <div className={iconsClasses}>
        <Contacts />
      </div>
    </div>
  );
}

function BottomMessageTypePanel() {
  const [addClicked, setAddClicked] = useState(false);
  return (
    <div className="bottom-message-panel d-flex align-items-center">
      {addClicked && <HoverAttachementIcons />}

      <Add
        className="add-button  rounded-circle"
        onClick={() => {
          console.log("sjndc");
          setAddClicked(!addClicked);
        }}
      />
      <Form className="flex-fill className='px-2'">
        <Form.Control
          placeholder="Search"
          className="border-0 bg-transparent"
        />
      </Form>
      <div className="emoji-icon px-2">
        <SentimentSatisfiedAlt />
      </div>
      <div className="send-button px-2 rounded-circle">
        <Send />
      </div>
    </div>
  );
}

function Chats() {
  return (
    <div className="d-flex flex-column overflow-auto flex-grow-1">
      {messagesObject.map((element) => {
        return element.name === currentUserName ? (
          <RightMessage key={element.id} {...element} />
        ) : (
          <LeftMessage key={element.id} {...element} />
        );
      })}
    </div>
  );
}

function SinglePersonChat() {
  const props = chats[0];
  return (
    <div className="h-100 d-flex flex-column shadow-sm rounded-top">
      <div
        style={{
          background: "#f5f6f7",
        }}
        className="p-3"
      >
        {/*
      top head of profile
    */}
        <div className="d-flex align-items-center">
          <img
            className="single-chat-profile-img rounded-circle "
            src={urlRounded + "/v1624861316/user-database/1_qgywsk.jpg"}
            alt=""
          />
          <div className="d-flex flex-column flex-fill pl-3">
            <strong>{props.name}</strong>
            <span
              style={{
                color: "#2A8BF2",
              }}
            >
              {props.lastOnline}
            </span>
          </div>
          <div className="top-attachement-btns d-flex justify-content-around">
            <div className="single-chat-profile-img d-flex align-items-center justify-content-center rounded-circle border">
              <AttachFile />
            </div>
            <div className="single-chat-profile-img d-flex  align-items-center justify-content-center rounded-circle border">
              <MoreVert />
            </div>
          </div>
        </div>
        {/* top ends */}
      </div>
      <Chats />
      <BottomMessageTypePanel />
    </div>
  );
}

export default function ChatDashboard() {
  return (
    <div className="h-100">
      <Row noGutters className="h-100">
        <Col className="bg-light col col-12 col-lg-2">
          <div className="d-flex d-flex flex-column align-items-center profile-container pt-5 ">
            <img
              className="profile-image rounded-circle h-25 w-25 mb-3"
              alt="user profile"
              src={
                urlRounded +
                "/v1624871711/user-database/light_brown_dog_puppy_and_black_white_cat_kitten_on_green_grass_hd_cats_and_dogs_fk2ch1.jpg"
              }
            />
            <strong>Guru Hiremath</strong>
          </div>
          <div className="menu-panel d-flex flex-column mt-5 mx-4">
            <SideMenu />
          </div>
        </Col>
        <Col
          style={{
            background: "#FFFFFF",
          }}
          className="h-100"
        >
          <div className="h-100">
            <Row className="h-100 no-gutters p-2 p-lg-5">
              {/* middle container */}
              <Col className="col-12 col-lg-6 h-100 d-flex flex-column shadow-sm">
                <div className="d-flex justify-content-between">
                  <div>
                    <h2>Chat</h2>
                    <span
                      style={{
                        color: "#707C97",
                      }}
                    >
                      Recent Chats <ExpandMore />
                    </span>
                  </div>
                  <div>
                    <Button className="new-chat-button">
                      {" "}
                      <Add /> Create New Chat
                    </Button>
                  </div>
                </div>
                <div className="d-flex align-items-center mx-4 pt-3">
                  <Search />
                  <Form className="border-right flex-fill mr-5 px-2">
                    <Form.Control
                      placeholder="Search"
                      className="border-0 bg-transparent"
                    />
                  </Form>
                  <div>
                    Messages <ExpandMore />
                  </div>
                </div>
                <ChatTiles />
              </Col>
              {/* right chat panel */}
              <Col className="col-lg-6 h-100 pl-5">
                <SinglePersonChat />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}
