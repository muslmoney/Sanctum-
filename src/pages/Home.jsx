import React from 'react'
import Image from '../components/Image'
import HeaderImage2 from './../assets/headerImg2.jpg'
import HeaderImage1 from './../assets/headerImg.jpg'
import Cards from '../components/Cards'
import ProductsImage1 from '../assets/productsImg1.jpg'
import ProductsImage2 from '../assets/productsImg2.jpg'
import Typography from '../components/Typography'
import AboutImg1 from '../assets/about-img1.jpg'
import AboutImg2 from '../assets/about-img2.jpg'
import ProjectImg from '../assets/project-img.jpg'
import Title from '../components/Typography'



const Home = () => {
    return (
        <div>
            <section className='Home__header'>
                <div className="container">
                    <div className="Home__header-row">
                        <div className="Home__header-wrap">
                            <div className="Home__header-content ">
                                {/* <h1 className='title-1'>Sanctum <br /> Ecsclusive santexnika </h1> */}
                                <Title lvl={1} weight={500} >
                                Sanctum <br /> Ecsclusive santexnika
                                </Title>
                            </div>
                            <div className="Home__header-content__footer">
                                <div className="Home__header-content__footer-items">
                                    <div className="Home__header-content__item">
                                        <div>
                                            <h4 className='title-4'>
                                                2560
                                            </h4>
                                            <p>
                                                Довольных клиентов
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className='title-4'>
                                                302
                                            </h4>
                                            <p>
                                                Качественных товаров
                                            </p>
                                        </div> <div>
                                            <h4 className='title-4'>
                                                25 607
                                            </h4>
                                            <p>
                                                Фабрики запущены по миру
                                            </p>
                                        </div> <div>
                                            <h4 className='title-4'>
                                                11 000
                                            </h4>
                                            <p>
                                                Выполнено проектов под ключ
                                            </p>
                                        </div>
                                    </div>
                                    <Image src={HeaderImage2} />

                                </div>
                            </div>
                        </div>
                        <Image title={'Image'} src={HeaderImage1} className={'Home__header-img'} />

                        {/* <div className="Home__header-img">
                        <img src="" alt="" />
                    </div> */}
                    </div>
                </div>

            </section>
            <section className='container Products'>
                <h1 className='title-1'>Продукция Sanctum</h1>
                <div className="Products__wrap">
                    <Cards className={'Products__card'} ImgTitle={'productsImg'} ImgSrc={ProductsImage1} title={'Раковины'} />
                    <Cards className={'Products__card'} ImgTitle={'productsImg'} ImgSrc={ProductsImage2} title={'Унитазы'} />
                    <Cards className={'Products__card'} ImgTitle={'productsImg'} ImgSrc={ProductsImage1} title={'Раковины'} />
                    <Cards className={'Products__card'} ImgTitle={'productsImg'} ImgSrc={ProductsImage2} title={'Унитазы'} />
                </div>
            </section>





            <section className="about">
                <div className="container">
                    <div className="about__wrap">
                        <div className="about__images">
                            <img src={AboutImg1} alt="AboutImg1" />
                            <img src={AboutImg2} alt="AboutImg2" />
                        </div>
                        <div className="about__card">
                            {/* <Typography  /> */}
                            <h1 className='title-1'>
                                O Sanctum
                            </h1>
                            <p className='card-text-opacity about-text'>
                                Наши товары делают жизнь комфортной, безопасной и
                                презинтабельной. Высокий уровень и заботы и
                                внимание к каждому покупателю
                            </p>
                            <div className="about__card__inner">
                                <div className='about__card__inner-item'>
                                    <div><h1>01</h1></div>
                                    <div className='pon'><h4 >Большой ассортимент</h4>
                                        <p className='card-text-opacity'>Для ванной комнаты, акссесуары, высокий уровень
                                            к деталям, разные виды покрытий      </p></div>
                                </div>
                                <div className='about__card__inner-item'>
                                    <div><h1>02</h1></div>
                                    <div  className='pon'><h4>Большой ассортимент</h4>
                                        <p className='card-text-opacity'>Для ванной комнаты, акссесуары, высокий уровень
                                            к деталям, разные виды покрытий      </p></div>
                                </div>
                                <div className='about__card__inner-item'>
                                    <div><h1>03</h1></div>
                                    <div  className='pon'><h4>Большой ассортимент</h4>
                                        <p className='card-text-opacity'>Для ванной комнаты, акссесуары, высокий уровень
                                            к деталям, разные виды покрытий      </p></div>
                                </div>
                                <div className='about__card__inner-item'>
                                    <div><h1>04</h1></div>
                                    <div  className='pon'   ><h4>Большой ассортимент</h4>
                                        <p className='card-text-opacity'>Для ванной комнаты, акссесуары, высокий уровень
                                            к деталям, разные виды покрытий      </p></div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>




<section className="project">
    <div className="container">
        <h1>
            Проект месяца 
        </h1>
        <div className="project__wrap">
<div className='project__card'>
<h3>Мраморная ванна Ultra</h3>
<div className='project__card-item'>
    <p>Стиль: Лофт</p>
    <p>Размер 1800 x 1200 x 500мм</p>
    <button >Подробнее</button>
</div>
</div>
            <div className='project__img'><img src={ProjectImg} alt="project-img" /></div>
        </div>
    </div>
</section>







        </div>
    )
}

export default Home