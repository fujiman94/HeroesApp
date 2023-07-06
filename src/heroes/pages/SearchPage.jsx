import React from 'react'
import { useForm } from '../hooks/useForm'
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { getHeroesByName } from '../helpers';
import { HeroCard } from '../components';

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = ''} = queryString.parse( location.search );

  const heroes = getHeroesByName(q);

  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    // if( searchText.trim().length <= 1 ) return;

    navigate(`?q=${ searchText }`);
  }

  return (
    <>
    <h1>SearchPage</h1>
    <hr/>

    <div className='row'>
      <div className='col-5'>
        <h4>Searching</h4>
        <hr/>
        <form onSubmit={ onSearchSubmit }>
          <input
            type='text'
            placeholder='Search a hero'
            className='form-control'
            name='searchText'
            autoComplete='off'
            value={ searchText }
            onChange={ onInputChange }
          />

          <button
            className='btn btn-outline-primary mt-1'
          >
            Search
          </button>
        </form>
      </div>
      
      <div className='col-7'>
        <h4>Results</h4>
        <hr/>

        {/* {
          ( q === '') 
            ? <div className='alert alert-primary'> Search a hero </div>
            :(heroes.length === 0) && <div className='alert alert-danger'> There's no results with <b>{ q }</b> </div>

        } */}

        <div className='alert alert-primary' style={{ display:  q !== '' ? 'none' : '' }}>
          Search a hero
        </div>

        <div className='alert alert-primary' style={{ display: 'none' }}>
          There's no results with
        </div>

        {
          heroes.map( hero => (
          <HeroCard key={ hero.id } { ...hero }/>
          ))
        }
        {/* <HeroCard/> */}
      </div>
    </div>
    </>
  )
}
