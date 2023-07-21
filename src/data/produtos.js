import bud from '../assets/produtos/cervejas/bud600.jpg'
import brahma from '../assets/produtos/cervejas/brahma600.webp'
import skol from '../assets/produtos/cervejas/skoll600.webp'
import heineken from '../assets/produtos/cervejas/heineken600.webp'
import stella from '../assets/produtos/cervejas/stella600.jpg'
import original from '../assets/produtos/cervejas/original600.webp'
import fileCFritas from '../assets/produtos/petiscos/filecfritas.webp'
import espetinho from '../assets/produtos/petiscos/espetinhos.jpg'
import frango from '../assets/produtos/petiscos/frango.jpg'
import macaxeira from '../assets/produtos/petiscos/macaxeira.webp'
import pastel from '../assets/produtos/petiscos/pastel.jpg'
import peixe from '../assets/produtos/petiscos/peixe.jpg'
import bisteca from '../assets/produtos/pratos/bisteca.jpg'
import camaraoAlhoEOleo from '../assets/produtos/pratos/camaraoalho.jpg'
import camaraoInt from '../assets/produtos/pratos/camaraoint.webp'
import galinha from '../assets/produtos/pratos/galinha.webp'
import parmeggiana from '../assets/produtos/pratos/parmeggiana.webp'
import peixeAssado from '../assets/produtos/pratos/peixe.jpeg'

export const cervejas = [
  {
    id: 1,
    nome: 'Budweiser 600 ml',
    descricao: 'Cerveja Budweiser 600 ml',
    preco: 13.99,
    imagem: bud
  },
  {
    id: 2,
    nome: 'Brahma Duplo Malte 600 ml',
    descricao: 'Cerveja Brahma Duplo Malte 600 ml',
    preco: 10.99,
    imagem: brahma
  },
  {
    id: 3,
    nome: 'Skol 600 ml',
    descricao: 'Cerveja Skol 600 ml',
    preco: 8.99,
    imagem: skol
  },
  {
    id: 4,
    nome: 'Heineken 600 ml',
    descricao: 'Cerveja Heineken 600 ml',
    preco: 13.99,
    imagem: heineken
  },
  {
    id: 5,
    nome: 'Stella Artois 600 ml',
    descricao: 'Cerveja Stella Artois 600 ml',
    preco: 13.99,
    imagem: stella
  },
  {
    id: 6,
    nome: 'Original 600 ml',
    descricao: 'Cerveja Original 600 ml',
    preco: 8.99,
    imagem: original
  }
]

export const petiscos = [
  {
    id: 7,
    nome: 'Filé com Fritas',
    descricao: 'Filé ao ponto acompanhado de batatas fritas',
    preco: 29.99,
    imagem: fileCFritas
  },
  {
    id: 8,
    nome: 'Frango á Passarinha',
    descricao: 'Frango frito bem crocante',
    preco: 23.99,
    imagem: frango
  },
  {
    id: 9,
    nome: 'Espetinhos',
    descricao: 'Espetinhos de Carne ou Frango',
    preco: 7.5,
    imagem: espetinho
  },
  {
    id: 10,
    nome: 'Porção de Minipastéis',
    descricao: 'Porção com 6 minipastéis (sabores: carne, queijo e frango)',
    preco: 20.99,
    imagem: pastel
  },
  {
    id: 11,
    nome: 'Iscas de Peixe',
    descricao: 'Iscas de peixe frito',
    preco: 27.99,
    imagem: peixe
  },
  {
    id: 12,
    nome: 'Macaxeira Frita',
    descricao: 'Porção de macaxeira frita extremamente crocante ',
    preco: 18.5,
    imagem: macaxeira
  }
]

export const pratos = [
  {
    id: 13,
    nome: 'Filé á Parmeggiana',
    descricao: 'Filé á parmeggiana individual',
    preco: 27.99,
    imagem: parmeggiana
  },
  {
    id: 14,
    nome: 'Peixe Assado',
    descricao:
      'Tambaqui assado no forno. Acompanha arroz, feijão e verduras; serve até 3 pessoas',
    preco: 120.99,
    imagem: peixeAssado
  },
  {
    id: 15,
    nome: 'Galinha Caipira',
    descricao: 'Meia Galinha Caipira cozida; serve até 2 pessoas',
    preco: 79.99,
    imagem: galinha
  },
  {
    id: 16,
    nome: 'Camarão Internacional ',
    descricao:
      'Porção para até 4 pessoas de um delicioso camarão internacional',
    preco: 144.99,
    imagem: camaraoInt
  },
  {
    id: 17,
    nome: 'Bisteca Suína',
    descricao:
      'Prato individual de bisteca suína com arroz, feijão, ovo, verdura e batata frita',
    preco: 22.99,
    imagem: bisteca
  },
  {
    id: 18,
    nome: 'Camarão ao alho e oléo',
    descricao: 'Porção idividual de massa com camarão ao alho e oléo',
    preco: 33.99,
    imagem: camaraoAlhoEOleo
  }
]
