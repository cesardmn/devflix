# devflix

CRUD to save favorite dev links.
Entidades:

    User:
    	id: int (automate)
    	email: str
    	name: str
    	avatar_url: str
    	videos: many fields

    Video:
    	id: int (automate)
    	url: url
    	language: dropdown
    	user: foringkey
    	updated: now

Funcionalidades: - [] GitHub SingIn. - [] Cadastrar um link. - Links somente do YouTube. - [] Remover um link. - [] Filtro por usuário. - [] Filtro por linguagem.

Todo:

    - [] Rascunhar interface.
    	- [] Definir e desenhar págias.
    	- [] Rascunhar Retorno das APIs.
    - [] Definir banco de dados e ORM
    	- [] Fazer as conxões
    	- [] Modelar entidades.

<iframe
width="560"
height="315"
src="https://www.youtube-nocookie.com/embed/SiFNOQzRagk"
title="YouTube video player"
frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
allowfullscreen
></iframe>
