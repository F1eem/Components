import React from "react";
import { Button } from "./units";

export const StatusButton = ({ status }) => {
  switch (status) {
    case "stopped": {
      return <Button bgColor={"red"}>Остановлен</Button>;
    }
    case "completed": {
      return <Button bgColor={"purple"}>Завершено</Button>;
    }
    case "waiting_info": {
      return <Button bgColor={"grey"}>Ждем информацию</Button>;
    }
    case "in_progress": {
      return <Button bgColor={"green"}>В работе</Button>;
    }
    default: {
      return <Button bgColor={"ghostwhite"}>Неизвестно</Button>;
    }
  }
};
