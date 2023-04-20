@extends('layouts.app')

@section('title', 'Manage Users')

@section('content')
    <div class="container-fluid">
        <div id="user-edit">
            <user-edit :user="{{ json_encode($user) }}"></user-edit>
        </div>
    </div>
@endsection
