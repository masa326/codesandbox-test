import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

const createIncompleteList = (text) => {
  const div = document.createElement("div");
  div.className = "list-row";

  const li = document.createElement("li");

  const p = document.createElement("p");
  p.innerText = text;

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    deleteFromIncompleteList(completeButton.parentNode);

    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    addTarget.textContent = null;

    const p = document.createElement("li");
    p.innerText = text;

    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      document
        .getElementById("complete-list")
        .removeChild(backButton.parentNode);

      const backTarget = backButton.parentNode;
      const text = backTarget.firstElementChild.innerText;

      createIncompleteList(text);
    });

    addTarget.appendChild(p);
    addTarget.appendChild(backButton);

    document.getElementById("complete-list").appendChild(addTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  li.appendChild(p);
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  document.getElementById("incomplete-list").appendChild(div);
};
