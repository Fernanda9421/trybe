// Para criar um cookie, você só precisa atribuir à propriedade document.cookie uma string contendo o nome e o valor do que se pretende armazenar:
document.cookie = "email=isabella@email.com";

// Por definição, o cookie é deletado quando fechamos o navegador. Para que isso não aconteça, você pode adicionar uma data para expiração como no exemplo abaixo:
document.cookie = "email=isabella@email.com; expires=Thu, 17 Dec 2020 12:00:00 UTC";

// Você pode adicionar também o parâmetro path que dirá ao navegador qual caminho o cookie que você criou pertence. Por padrão, o cookie pertence à página atual.
document.cookie = "email=isabella@email.com; expires=Thu, 17 Dec 2020 12:00:00 UTC; path=/";

// E você pode também alterar o valor do cookie da mesma forma que o criamos. Basta atribuir a document.cookie a nova informação que você quer armazenar.
document.cookie = "email=cleyton@email.com; expires=Thu, 17 Dec 2020 12:00:00 UTC";

// Para deletar o cookie, você não precisa especificar o valor que pretende deletar. Você pode deletá-lo passando uma data que já expirou:
document.cookie = "email=; expires=Tue, 01 Dec 2020 12:00:00 UTC;"