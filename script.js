let isSender = true;

function sendMessage() {
  const messageInput = document.getElementById('message');
  const message = messageInput.value.trim();
  
  if (message === "") return;

  const chatBox = document.getElementById('chat-box');
  const newMessage = document.createElement('div');
  
  newMessage.classList.add('message');
  newMessage.classList.add(isSender ? 'sender' : 'receiver');
  newMessage.innerText = message;
  
  chatBox.appendChild(newMessage);
  chatBox.scrollTop = chatBox.scrollHeight;

  // Alterna entre remetente e destinatário
  isSender = !isSender;
  
  // Limpa o campo de entrada
  messageInput.value = '';
}

// Enviar mensagem pressionando "Enter"
document.getElementById('message').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    sendMessage();
  }
});
