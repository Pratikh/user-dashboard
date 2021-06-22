interface dispatch {
  type: string;
  value: string;
  key: string | undefined;
}

export type dipatcherType = (obj: dispatch) => void

export function inputEventHandler(
  localDispatcher: dipatcherType,
  type?: string
) {
  function commonInputChangeHandler(event: any) {
    const {
      target: { value },
    } = event;
    let inputType = type;
    let myCustomType = null;

    if (event.target.getAttribute) {
      inputType = event.target.getAttribute("my-custom-prop-name");
      myCustomType = event.target.getAttribute("my-custom-type");
    }
    if (myCustomType === "number" && isNaN(+value)) {
      return;
    }
    localDispatcher({ type: "UPDATE", value, key: inputType });
  }

  return commonInputChangeHandler;
}
