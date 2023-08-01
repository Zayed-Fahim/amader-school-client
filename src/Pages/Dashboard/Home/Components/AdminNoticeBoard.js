import React, { useContext } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { AuthContext } from "../../../../Contexts/AuthProvider/AuthProvider";

const AdminNoticeBoard = () => {
  const { admin } = useContext(AuthContext);
  return (
    <div className="overflow-y-scroll overflow-x-hidden h-[575px]">
      <VerticalTimeline layout="1-column-left">
        {admin?.notices?.map((notice) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgb(33, 150, 243)",
              color: "#fff",
              height: "160px",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2011 - present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<AiOutlineCheckCircle />}
          >
            <h1 className="text-[18px] font-bold -mb-3">{notice?.title}</h1>
            <p>{notice?.description}</p>
            <h3 className="mt-5">{notice?.postedBy}</h3>
            <h4>Date: {notice?.postedDate}</h4>
          </VerticalTimelineElement>
        ))}

        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<AiOutlineCheckCircle />}
        />
      </VerticalTimeline>
    </div>
  );
};

export default AdminNoticeBoard;
