import React, { useContext } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  AiOutlineCheckCircle,
  AiOutlineDelete,
  AiOutlineEdit,
} from "react-icons/ai";
import { AuthContext } from "../../../../../../Contexts/AuthProvider/AuthProvider";

const ViewNotice = () => {
  const { admin } = useContext(AuthContext);

  return (
    <div className="overflow-y-scroll overflow-x-hidden">
      <VerticalTimeline layout="1-column-left" className="">
        {admin?.notices?.map((notice) => (
          <VerticalTimelineElement
            key={notice._id} // Don't forget to add a unique key
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgb(33, 150, 243)",
              color: "#fff",
              height: "160px",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  rgb(33, 150, 243)",
            }}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<AiOutlineCheckCircle />}
          >
            <div className="flex justify-between">
              <h1 className="text-[18px] font-bold -mb-3">{notice?.title}</h1>
              <div className="flex gap-2">
                <button className="text-white hover:scale-110">
                  <AiOutlineEdit title="Edit" />
                </button>
                <button className="text-white hover:text-red-500 hover:scale-110">
                  <AiOutlineDelete title="Delete" />
                </button>
              </div>
            </div>
            <p>{notice?.description}</p>
            <h3 className="mt-8">{notice?.postedBy}</h3>
            <h4 className="">Date: {notice?.postedDate}</h4>
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

export default ViewNotice;
