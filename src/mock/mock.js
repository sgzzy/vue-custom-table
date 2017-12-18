var thead = [
  {
    title: "用户姓名",
    key: "name",
    className: "user-name"
  },
  {
    title: "用户年龄",
    key: "age"
  },
  {
    title: "用户地址",
    key: "address"
  }
];

// thead包含的项data必须包含
var data = [
  [
    {
      name: "John Brown",
      age: 18,
      address: "New York No. 1 Lake Park",
      date: "2016-10-03",
      cellClassName: {
        address: "vue-table-body-address"
      }
    },
    {
      name: "Jim Green",
      age: 24,
      address: "London No. 1 Lake Park",
      date: "2016-10-01"
    },
    {
      name: "Joe Black",
      age: 30,
      address: "Sydney No. 1 Lake Park",
      date: "2016-10-02"
    },
    {
      name: "Jon Snow",
      age: 26,
      address: "Ottawa No. 2 Lake Park",
      date: "2016-10-04"
    }
  ]
];

export { thead, data };
