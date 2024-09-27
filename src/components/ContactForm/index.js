import { projectTypes, budgets } from "@/data";
import { Form, Input, Button, Checkbox, message, Spin } from "antd";
import { useState } from "react";
import axios from "axios";
import useMediaQuery from "../useMedia";

const Tag = ({ tag, type, onSelectTag, selectedValue }) => {
  return (
    <div
      onClick={() => {
        onSelectTag(tag.value, type);
      }}
      className={`${
        tag.value === selectedValue ? "bg-secondary" : "border-black-3"
      } sm:h-[56px] hover:cursor-pointer hover:border-secondary rounded-[1440px] sm:px-[32px] px-[16px] py-[8px] sm:py-[15px] border  flex-row whitespace-nowrap justify-center items-center inline-flex`}
    >
      <p
        className={`${
          tag.value === selectedValue ? "text-white" : "text-black-1"
        } sm:text-lg text-xs `}
      >
        {tag.label}
      </p>
    </div>
  );
};

const ContactForm = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const [form] = Form.useForm();
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedBudget, setSelectedBudget] = useState(null);
  const [loading, setLoading] = useState(false);
  const [api, contextHolder] = message.useMessage();

  const onSelectTag = (value, type) => {
    if (type === "budget") {
      setSelectedBudget(value);
      return;
    }
    setSelectedProject(value);
  };

  const onSubmit = (values) => {
    const payload = {
      ...values,
      budget: selectedBudget,
      project_type: selectedProject,
      is_newsletter: values.is_newsletter === "on",
    };
    setLoading(true);
    axios
      .post("https://formspree.io/f/xrgnaydz", payload)
      .then((response) => {
        setLoading(false);
        form.resetFields();
        setSelectedProject(null)
        setSelectedBudget(null)
        api.success("Thank you! We’ve received your message and will get back to you shortly");
      })
      .catch((error) => {
        setLoading(false)});
  };

  return (
    <div className="bg-white sm:my-[70px] my-[40px] rounded-[48px]">
      {contextHolder}
      <div className="sm:p-[72px] p-5 sm:w-2/3">
        <div className="sm:py-5 py-3">
          <Spin spinning={loading}>
            <Form
              form={form}
              name="contactUs"
              layout="vertical"
              initialValues={{ remember: true }}
              onFinish={onSubmit}
              onFinishFailed={() => {}}
            >
              <p className="text-black-3 text-[28px] lewading-[33px]">
                Project Type
              </p>
              <div className="sm:py-10 py-5 w-full">
                <div className="sm:gap-5 gap-2  flex flex-wrap">
                  {projectTypes.map((projectType) => (
                    <Tag
                      tag={projectType}
                      type="projectType"
                      onSelectTag={onSelectTag}
                      selectedValue={selectedProject}
                    />
                  ))}
                </div>
              </div>
              <Form.Item
                name="first_name"
                rules={[
                  { required: true, message: "Please input your first name!" },
                ]}
              >
                <Input
                  size="large"
                  placeholder={"First Name"}
                  className="custom-input flex pb-5"
                />
              </Form.Item>

              <Form.Item
                name="last_name"
                rules={[
                  { required: true, message: "Please input your last name!" },
                ]}
              >
                <Input
                  size="large"
                  placeholder="Last Name"
                  className="custom-input"
                />
              </Form.Item>

              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please input your Email!" },
                  {
                    type: "email",
                    message: "Please input valid email",
                  },
                ]}
              >
                <Input
                  size="large"
                  placeholder="Email"
                  className="custom-input"
                />
              </Form.Item>

              <Form.Item
                name="phone"
                rules={[
                  { required: true, message: "Please input phone number!" },
                  {
                    pattern: new RegExp(/^\d{10,}$/),
                    message: "Please input a valid phone number",
                  },
                ]}
              >
                <Input
                  size="large"
                  placeholder="Phone"
                  className="custom-input"
                />
              </Form.Item>
              <Form.Item
                name="company_name"
                rules={[
                  { required: true, message: "Please input company name!" },
                ]}
              >
                <Input
                  size="large"
                  placeholder="Company Name"
                  className="custom-input"
                />
              </Form.Item>
              <Form.Item
                name="project_details"
                rules={[
                  { required: true, message: "Please input project details!" },
                ]}
              >
                <Input
                  size="large"
                  placeholder="Project Deails"
                  className="custom-input"
                />
              </Form.Item>

              <p className="text-black-3 text-[28px] lewading-[33px]">Budget</p>
              <div className="sm:py-10 py-5 w-full">
                <div className="sm:gap-5 gap-3  flex flex-wrap">
                  {budgets.map((budget) => (
                    <Tag
                      tag={budget}
                      type="budget"
                      onSelectTag={onSelectTag}
                      selectedValue={selectedBudget}
                    />
                  ))}
                </div>
              </div>

              <Form.Item name="is_newsletter">
                <div className="flex flex-row sm:items-center items-start">
                  <Checkbox />

                  <p className="text-black-3 text-lg pl-5">
                    Sign up for our newsletter to stay in touch.
                  </p>
                </div>
              </Form.Item>

              <div className="flex justify-start pt-5" data-aos="zoom-in-up">
                <Button
                  htmlType="submit"
                  type="primary"
                  className="flex sm:min-h-[84px] min-h-[58px] w-[312px] rounded-[1440px] bg-black-3 "
                  style={{
                    borderRadius: 16,
                    borderRadius: isMobile ? 1440 : 500,
                    backgroundColor: "#014751",
                  }}
                >
                  <span className="sm:text-[28px] text-xl">Submit</span>
                </Button>
              </div>
            </Form>
          </Spin>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
