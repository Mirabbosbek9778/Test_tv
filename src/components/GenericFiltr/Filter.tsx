import { Select, Space } from "antd";
import { Title } from "./style";

const Filter = () => {
  return (
    <div className="w-full py-8 bg-black">
      <Title>Фильмы</Title>
      <Space className="flex pt-8 rounded-full">
        <Select
          defaultValue="Комедия"
          style={{ width: "340px", height: 64 }}
          options={[
            { value: "Комедия", label: "Комедия" },
            { value: "lucy", label: "Lucy" },
          ]}
        />
        <Select
          defaultValue="2020 – 2023"
          style={{ width: "340px", height: 64 }}
          options={[
            { value: "2020 – 2023", label: "2020 – 2023" },
            { value: "2020 – 2023", label: "2020 – 2024" },
            { value: "2020 – 2023", label: "2020 – 2025" },
          ]}
        />
        <Select
          defaultValue="Disney"
          style={{ width: "340px", height: 64 }}
          options={[
            { value: "Disney", label: "Disney" },
            { value: "Disney", label: "Disney2" },
            { value: "Disney", label: "Disney3" },
          ]}
        />
        <Select
          defaultValue="По умолчанию"
          style={{ width: "340px", height: 64 }}
          options={[
            { value: "По умолчанию", label: "По умолчанию" },
            { value: "По умолчанию", label: "По умолчанию2" },
            { value: "По умолчанию", label: "По умолчанию" },
          ]}
        />
      </Space>
    </div>
  );
};

export default Filter;
